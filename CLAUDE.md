# Matcha garden: how to change the look

This repository is the one source for the Matcha garden look on every device:
the Claude desktop app (as a plugin) and claude.ai in Chrome (the
`chrome-extension` folder). Change it here, never on a device.

## Where the colors live

| What | Light | Dark |
|---|---|---|
| App surfaces, text, accent | `hooks/register.tsx` (`makeColors`, `light`) | `hooks/register.tsx` (`dark`, `dark.roles.accent`) |
| Desktop plants | `hooks/scene.ts` (top of `<style>`) | `hooks/scene.ts` (`prefers-color-scheme: dark` block) |
| claude.ai colors | `chrome-extension/theme.css` (`data-mode="light"` block) | `chrome-extension/theme.css` (both dark blocks: `data-mode="dark"` and the `system` media query) |
| claude.ai plants | `chrome-extension/theme.css` (`#matcha-garden-plants` vars) | the two dark `#matcha-garden-plants` lines |

Keep the desktop and claude.ai values the same.

## Steps when the owner asks for a change

1. Show the options first (a small comparison page) and wait for the owner to pick. Do not change colors the owner did not ask about.
2. Edit the files in the table above.
3. Raise the version in **both** `.claude-plugin/plugin.json` and `chrome-extension/manifest.json` (for example 0.2.0 → 0.3.0). Devices only pick up a plugin update when this version changes.
4. Run `claude plugin validate .` and fix anything it reports.
5. Commit and push to `main`. Commits use the GitHub noreply address set in this repository's local git config.
6. Copy the changed files into the Google Drive folder that Chrome loads the extension from. It is under the owner's Google Drive (`~/Library/CloudStorage/GoogleDrive-*/マイドライブ/◆起業/100_横断/claude-theme-matcha-garden-main（Claudeの背景デザイン）`); keep its `chrome-extension` and `hooks` folders identical to this repository. If the folder can't be written, stop and tell the owner.
7. Report to Slack #coo-inbox in the owner's report format, after showing the text and getting an OK.

## How each device picks up a change

- **Desktop app on a Mac**: `tools/install-mac-autoupdate.sh` (run once per Mac) makes launchd update the plugin every day at 8:00 and at login. The new look shows from the next new session. Log: `~/Library/Logs/matcha-garden-update.log`.
- **Desktop app on Windows**: same two commands as `tools/update-matcha-garden.sh`, registered once in Task Scheduler.
- **claude.ai in Chrome**: the extension checks its own files every minute and reloads itself when Google Drive brings new ones, then repaints open claude.ai tabs. Only the first install (Load unpacked) is done by hand.

## Never

- Write email addresses, keys or tokens into this repository; it may become public.
- Delete the Drive folder, the `-old` repository or any branch without the owner's OK.
