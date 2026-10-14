// Meme login. Not real security — everything runs client-side on purpose.
const USER = 'admin';
const PASS = 'pass';
const HACK_MS = 5000;

const HACK_LINES = [
  '> conectando a 192.168.0.69 ...',
  '> bypass firewall ........ OK',
  '> copiando /fotos/2014_emo/* ........ OK',
  '> leyendo historial de búsqueda ........ 😬',
  '> enviando historial a tu mamá ........ ENVIADO',
  '> minando dogecoin con tu GPU ........ 0.0000001 DOGE',
  '> borrando System32 ........ 47%',
  '> publicando tus notas de voz en el grupo de la familia ........ OK',
  '> cambiando tu fondo de pantalla a Shrek ........ OK',
  '> instalando Internet Explorer 6 ........ OK',
  '> 3 virus encontrados. Instalando 4 más ........ OK',
  '> todo bien, todo correcto ........ y yo que me alegro',
];

const $ = (id) => document.getElementById(id);
const screens = { login: $('login'), hack: $('hack'), bro: $('bro') };

function show(name) {
  for (const [key, el] of Object.entries(screens)) el.hidden = key !== name;
}

$('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = $('user').value.trim().toLowerCase();
  const pass = $('pass').value;
  const error = $('login-error');
  const card = e.currentTarget;

  if (user === USER && pass === PASS) {
    error.hidden = true;
    runHack();
    return;
  }

  error.textContent = 'Usuario o contraseña incorrectos. Intento registrado en la NASA.';
  error.hidden = false;
  card.classList.remove('shake');
  void card.offsetWidth; // restart animation
  card.classList.add('shake');
});

function runHack() {
  show('hack');
  const log = $('hack-log');
  const bar = $('hack-progress');
  log.textContent = '';
  bar.style.width = '0%';

  const start = performance.now();
  const lineEvery = HACK_MS / HACK_LINES.length;
  let shown = 0;

  function tick(now) {
    const elapsed = now - start;
    bar.style.width = Math.min(100, (elapsed / HACK_MS) * 100) + '%';

    while (shown < HACK_LINES.length && elapsed >= shown * lineEvery) {
      log.textContent += HACK_LINES[shown++] + '\n';
      log.scrollTop = log.scrollHeight;
    }

    if (elapsed < HACK_MS) requestAnimationFrame(tick);
    else show('bro');
  }
  requestAnimationFrame(tick);
}

$('again').addEventListener('click', () => {
  $('login-form').reset();
  $('login-error').hidden = true;
  show('login');
  $('user').focus();
});
