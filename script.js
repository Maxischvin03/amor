const canvas = document.getElementById("lluviaCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frase = " Te amo ";
const fontSize = 24;
const columnas = Math.floor(canvas.width / fontSize);
const drops = Array(columnas).fill(0);

// Gama de rosas: fuerte a claro
const colores = [
  "#FF1493", // rosa fuerte (deep pink)
  "#FF69B4", // hot pink
  "#FF85C1", // rosa intermedio
  "#FFB6C1", // light pink
  "#FFDDEE"  // rosa muy clarito
];

function dibujarLluvia() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px sans-serif";

  for (let i = 0; i < columnas; i++) {
    ctx.fillStyle = colores[Math.floor(Math.random() * colores.length)];
    const texto = frase;
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(texto, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(dibujarLluvia, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
