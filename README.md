# 🎮 Herní Sbírka - Tri hry v jedné aplikaci

Komplexní herní aplikace obsahující tři klasické hry vytvořené s čistým HTML5, CSS3 a JavaScriptem. Vše běží lokálně bez potřeby serveru.

## 📋 Obsah

Aplikace obsahuje **tři hry**:

### 1. 👻 **Pac-Man**
- Sbírání teček v labyrintu
- Vyhýbání se čtyřem náhodně se pohybujícím duchům
- Počítání skóre za každou sebranou tečku (+10 bodů)
- Hra skončí při kolizi s duchem nebo sběru všech teček

### 2. 🐍 **Snake**
- Klasická hadí hra
- Růst hada po sebrání jídla
- Konec hry při nárazu do zdi nebo do sebe
- Počítání skóre za sebrané jídlo (+50 bodů)
- 3 životy než konec hry

### 3. 🚊 **Subway Surfers (2D klon)**
- Nekonečný běh po trzích
- Pohyb mezi 3 pruhy (vlevo, střed, vpravo)
- Vyhýbání se překážkám
- Sbírání spirálových mincí (+1 bod za minci)
- Postupně se zvyšující rychlost
- Počítání skóre podle ujeté vzdálenosti

## 🚀 Spuštění

### Automatické spuštění s otevřením v prohlížeči

**Linux/Mac:**
```bash
./run.sh
```

**Windows:**
```bash
run.bat
```

### Ruční spuštění

```bash
# Spuštění serveru
cd projekt-s-AI1
python3 -m http.server 8000

# Poté navštiv v prohlížeči:
# http://localhost:8000
```

## 🎮 Ovládání

### Pac-Man
- **Šipky nahoru/dolů/vlevo/vpravo** - Pohyb Pac-Mana

### Snake
- **Šipky nahoru/dolů/vlevo/vpravo** - Řízení hada

### Subway Surfers
- **Šipka vlevo** - Pohyb na levý pruh
- **Šipka vpravo** - Pohyb na pravý pruh

## 📁 Struktura souborů

```
projekt-s-AI1/
├── index.html        # Hlavní stránka se všemi hrami
├── style.css         # Stylování (responsive design)
├── script.js         # Logika všech tří her
├── run.sh           # Skript pro spuštění (Linux/Mac)
├── run.bat          # Skript pro spuštění (Windows)
└── README.md        # Tento soubor
```

## ✨ Vlastnosti

✅ **Čisté kódy** - Bez frameworků a knihoven, pouze vanilla JavaScript
✅ **Canvas vykreslování** - Vše je kresleno na HTML5 Canvas
✅ **Responzivní design** - Funguje na desktopech i tabletech
✅ **Menu systém** - Snadný výběr mezi hrami
✅ **Reset a restart** - Možnost kdykoliv resetovat nebo se vrátit do menu
✅ **Lokální běh** - Bez nutnosti serveru (soubory lze otevřít i přímo)
✅ **Animace** - Plynulé animace a vizuální efekty

## 🛠️ Technologie

- **HTML5** - Strukturace a Canvas element
- **CSS3** - Moderní styling s gradienty a animacemi
- **JavaScript (ES6+)** - Logika her, event handling, animační smyčky

## 📝 Poznámky

- Hry jsou optimalizovány pro velikost canvasu 800x600px
- Klávesové ovládání funguje lépe než dotyková vstup
- Mince v Subway Surfers mají spirálovou animaci
- Hráč v Subway Surfers se pohybuje pomalejší rychlostí
- Skóre se počítá podle sebraných mincí (+1 bod)

## 🎯 Budoucí vylepšení

- [ ] Zvukové efekty
- [ ] Uložení vysokého skóre
- [ ] Více úrovní obtížnosti
- [ ] Mobilní dotykové ovládání
- [ ] Více duchů v Pac-Manovi
- [ ] Power-ups v Pac-Manovi

---

**Vytvořeno:** 2024
**Jazyk:** JavaScript (vanilla)
**Licence:** MIT