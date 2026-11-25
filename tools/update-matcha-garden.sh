#!/bin/zsh
# Bring the Matcha garden desktop theme on this Mac up to the latest version
# on GitHub. Run daily and at login by launchd (see tools/install-mac-autoupdate.sh).
# A new version shows from the next new session (the app reads plugins at start).
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
LOG="$HOME/Library/Logs/matcha-garden-update.log"
{
  echo "== $(date '+%Y-%m-%d %H:%M:%S')"
  claude plugin marketplace update claude-theme-matcha-garden
  claude plugin update matcha-garden@claude-theme-matcha-garden --scope user
  echo "exit $?"
} >> "$LOG" 2>&1
