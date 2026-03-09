#!/bin/bash

# Herní Sbírka - Spuštění s automatickým otevřením v prohlížeči

echo "🎮 Spuštění herní sbírky..."
echo "Server běží na: http://localhost:8000"

# Spuštění serveru na pozadí
python3 -m http.server 8000 > /dev/null 2>&1 &
SERVER_PID=$!

# Čekání na spuštění serveru
sleep 2

# Otevření v prohlížeči
if command -v xdg-open &> /dev/null; then
    xdg-open "http://localhost:8000"
elif command -v open &> /dev/null; then
    open "http://localhost:8000"
elif command -v start &> /dev/null; then
    start "http://localhost:8000"
else
    echo "Prohlížeč nelze automaticky otevřít. Navštiv: http://localhost:8000"
fi

echo "Server běží. Stiskni CTRL+C pro zastavení."

# Zachování serveru v běhu
wait $SERVER_PID
