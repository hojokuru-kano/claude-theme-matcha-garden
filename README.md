# Matcha garden

A calm matcha-green look for Claude Code in the Claude desktop app. Soft, low-saturation greens with dark ink-green text instead of pure black on white, an opaque chat column, and paper-cut plants (a fern, a eucalyptus branch, grass and one red flower) that sway slowly in the window margins. It has a light version and a dark version.

## Install

At the prompt of a terminal session:

```
/plugin install matcha-garden --marketplace hojokuru-kano/claude-theme-matcha-garden
```

From a shell:

```
claude plugin install matcha-garden --marketplace hojokuru-kano/claude-theme-matcha-garden
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `hojokuru-kano/claude-theme-matcha-garden`, then Add plugin.

Answer `y` to add the marketplace, then pick the user scope with Enter.

This repository is private: it installs only on a computer whose GitHub account can read it and that already holds a git credential for github.com (an SSH key, or `gh auth login` then `gh auth setup-git`).

## Notes

- The left plant is placed for the sidebar being open.
- Code blocks, permission prompts and the message box keep the app's own shapes; only their colors follow the theme.

## claude.ai in Chrome

The `chrome-extension` folder gives claude.ai the same matcha colors and margin plants. It's a small unpacked extension that only runs on claude.ai and sends nothing anywhere.

1. Get this repository on the computer: `gh repo clone hojokuru-kano/claude-theme-matcha-garden`.
2. Open `chrome://extensions` in Chrome and turn on Developer mode (top right).
3. Click Load unpacked and choose the `chrome-extension` folder.
4. Reload claude.ai.

To update later, pull the repository, then click the reload icon on the extension's card in `chrome://extensions`.
