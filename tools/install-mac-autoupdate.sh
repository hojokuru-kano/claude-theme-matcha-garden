#!/bin/zsh
# One-time setup on a Mac: update the Matcha garden theme every day at 8:00
# and at login. Run from the repository: zsh tools/install-mac-autoupdate.sh
set -e
LABEL="com.hojokuru.matcha-garden-update"
SCRIPT="$HOME/Library/Application Support/matcha-garden/update-matcha-garden.sh"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
mkdir -p "${SCRIPT:h}" "$HOME/Library/LaunchAgents"
cp "${0:A:h}/update-matcha-garden.sh" "$SCRIPT"
chmod 755 "$SCRIPT"
cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key><array><string>/bin/zsh</string><string>$SCRIPT</string></array>
  <key>RunAtLoad</key><true/>
  <key>StartCalendarInterval</key><dict><key>Hour</key><integer>8</integer><key>Minute</key><integer>0</integer></dict>
</dict>
</plist>
PLIST
launchctl bootout "gui/$(id -u)/$LABEL" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"
echo "Installed $LABEL. Log: ~/Library/Logs/matcha-garden-update.log"
