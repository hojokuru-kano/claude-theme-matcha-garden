// Matcha garden: reload the extension by itself when its files change on disk.
// The folder is synced by Google Drive (or a git pull), so a theme change made
// on another computer arrives here as new files; Chrome only picks those up on
// a reload, which this does, then repaints the claude.ai tabs already open.
const FILES = ['manifest.json', 'theme.css', 'plants.js', 'reload.js']
const CHECK_MINUTES = 1

async function fingerprint() {
  const parts = []
  for (const file of FILES) {
    const response = await fetch(chrome.runtime.getURL(file), { cache: 'no-store' })
    parts.push(await response.text())
  }
  const bytes = new TextEncoder().encode(parts.join('\u0000'))
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('')
}

// The files as they were when this copy of the extension loaded.
async function remember() {
  await chrome.storage.local.set({ loaded: await fingerprint() })
}

// Open claude.ai tabs keep the old look until they get the new files.
async function repaintOpenTabs() {
  const tabs = await chrome.tabs.query({ url: 'https://claude.ai/*' })
  for (const tab of tabs) {
    try {
      await chrome.scripting.insertCSS({ target: { tabId: tab.id }, files: ['theme.css'] })
      await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['plants.js'] })
    } catch {
      // A tab that is still loading gets the files from the manifest instead.
    }
  }
}

chrome.runtime.onInstalled.addListener(async details => {
  await remember()
  if (details.reason === 'update') {
    await repaintOpenTabs()
  }
  chrome.alarms.create('check-files', { periodInMinutes: CHECK_MINUTES })
})

chrome.runtime.onStartup.addListener(async () => {
  await remember()
  chrome.alarms.create('check-files', { periodInMinutes: CHECK_MINUTES })
})

chrome.alarms.onAlarm.addListener(async alarm => {
  if (alarm.name !== 'check-files') {
    return
  }
  const { loaded } = await chrome.storage.local.get('loaded')
  const now = await fingerprint().catch(() => null)
  // Drive can be mid-sync; a file that can't be read yet is checked next time.
  if (now === null || loaded === undefined) {
    return
  }
  if (now !== loaded) {
    chrome.runtime.reload()
  }
})
