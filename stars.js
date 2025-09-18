
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const numStars = 150;
const stars = Array.from({ length: numStars }, () => ({
  // Center stars around (0,0) and spread them out
  x: (Math.random() - 0.5) * canvas.width,
  y: (Math.random() - 0.5) * canvas.height,
  z: Math.random() * canvas.width
}));

function animate() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(s => {
    s.z -= 1;
    if (s.z <= 0) {
      s.x = (Math.random() - 0.5) * canvas.width;
      s.y = (Math.random() - 0.5) * canvas.height;
      s.z = canvas.width;
    }
    const k = 128 / s.z;
    const sx = s.x * k + canvas.width / 2;
    const sy = s.y * k + canvas.height / 2;
    if (sx >= 0 && sx <= canvas.width && sy >= 0 && sy <= canvas.height) {
      const size = (1 - s.z / canvas.width) * 2;
      ctx.fillRect(sx, sy, size, size);
    }
  });
  requestAnimationFrame(animate);
}
animate();
