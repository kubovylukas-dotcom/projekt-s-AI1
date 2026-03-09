// Script: klikací karty + generateChallenge(game) + Snake game
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => {
    card.addEventListener('click', () => onCardClick(card));
    card.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCardClick(card); } });
  });
});

function onCardClick(card){
  const game = card.getAttribute('data-game');
  // role button ARIA toggle
  card.setAttribute('aria-pressed', 'true');
  // generujeme výzvu nebo hrajeme
  if(game === 'snake'){
    startSnakeGame();
  } else {
    generateChallenge(game);
  }
  // krátké vizuální zvýraznění
  card.classList.add('active');
  setTimeout(() => card.classList.remove('active'), 400);
}

function generateChallenge(game){
  const resultEl = document.getElementById('result');
  let text = '';

  if(game === 'chess'){
    text = 'Vyhraj partii bez rošády a bez obětování figur';
  } else if(game === 'snake'){
    text = 'Dosáhni skóre 50 bez použití pauzy';
  } else if(game === 'tetris'){
    text = 'Přežij 5 minut bez vytváření zbytečných mezer';
  } else {
    text = 'Vyber platnou hru (Šachy, Snake nebo Tetris).';
  }

  resultEl.textContent = text;
  resultEl.classList.remove('show');
  // restart animace
  void resultEl.offsetWidth;
  resultEl.classList.add('show');
  return text;
}

// Snake game variables
let canvas, ctx;
let snake, direction, food, score, gameRunning;

function startSnakeGame(){
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = 400;
  canvas.height = 400;
  snake = [{x: 200, y: 200}];
  direction = {x: 0, y: 0};
  food = {x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20};
  score = 0;
  gameRunning = true;
  document.addEventListener('keydown', changeDirection);
  gameLoop();
}

function changeDirection(e){
  if(!gameRunning) return;
  if(e.key === 'ArrowUp' && direction.y === 0){
    direction = {x: 0, y: -20};
  } else if(e.key === 'ArrowDown' && direction.y === 0){
    direction = {x: 0, y: 20};
  } else if(e.key === 'ArrowLeft' && direction.x === 0){
    direction = {x: -20, y: 0};
  } else if(e.key === 'ArrowRight' && direction.x === 0){
    direction = {x: 20, y: 0};
  }
}

function gameLoop(){
  if(!gameRunning) return;
  updateSnake();
  draw();
  setTimeout(gameLoop, 100);
}

function updateSnake(){
  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
  snake.unshift(head);
  if(head.x === food.x && head.y === food.y){
    score += 10;
    food = {x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20};
  } else {
    snake.pop();
  }
  if(head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)){
    gameRunning = false;
    alert('Hra skončila! Skóre: ' + score);
    canvas.style.display = 'none';
  }
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00d4ff';
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, 20, 20);
  });
  ctx.fillStyle = '#7b61ff';
  ctx.fillRect(food.x, food.y, 20, 20);
  ctx.fillStyle = '#e8f6ff';
  ctx.font = '20px Arial';
  ctx.fillText('Skóre: ' + score, 10, 30);
}

// Export pro testy / další rozšíření
if(typeof module !== 'undefined'){
  module.exports = { generateChallenge };
}
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="utf-8">
    <title>Tetris</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="board" width="240" height="400"></canvas>
    <script src="script.js"></script>
</body>
</html>
Vytvoř plně fungující webový Tetris v čistém HTML/CSS/JS (bez externích knihoven). Požadavky:
- Canvas 10×20 buněk, velikost buňky responsivně upravitelná.
- Klasické tetromina (I, J, L, O, S, T, Z) s rotacemi a kolizní detekcí.
- Gravity, soft drop, hard drop (mezerník), hold (H), next preview (min. 3 následující kusy), ghost piece.
- Ovládání: šipky (vlevo/vpravo = pohyb, dolů = soft drop), mezerník = hard drop, Q/E nebo X/Z = rotace.
- Line clear (single, double, triple, tetris) se skórováním a zvýšením úrovně rychlosti podle počtu smazaných řádků.
- Pauza (P), restart hry, game over obrazovka s výsledkem.
- Jasně oddělená logika hry a vykreslování; dobře komentovaný kód.
- Export/import skóre do localStorage, jednoduché UI s tlačítky.
- Bonus: přidat jednoduché zvuky (volitelné).Vytvoř webové šachy v čistém HTML/CSS/JS (bez externích knihoven). Požadavky:
- 8×8 šachovnice, responzivní, figurky vykreslené SVG/CSS nebo obrázky.
- Plná validace tahů pro všechny figurky včetně rošády, en passant, proměny pěšce.
- Detekce šachu, šach-matu, patu; možnost undo a reset.
- Ovládání: kliknutí (vybrat figurku -> cílové políčko) + podporu tahů přetažením.
- Podpora FEN import/export a PGN export jednoduché partie.
- Jednoduchý AI protivník (minimálně minimax s ořezáním nebo hloubka 2–3) a režim hotseat (2 hráči).
- UI: zobrazení tahu, historie tahů, časovač na tah (volitelně), nastavení obtížnosti.
- Jasné oddělení engine (logika tahu) a UI, dobře komentovaný kód.
- Uložit partii do localStorage.