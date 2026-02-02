import { cuneiformMap } from "./cuneiformMap.js";

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Get all glyphs
const glyphs = Object.values(cuneiformMap).join("");

// Translator output queue
let translationQueue = [];

// Listen for translation events
window.addTranslatedText = (translated) => {
  translationQueue.push(...translated.split(""));
};

function drawMatrix() {
  function drawMatrix() {
  // Slightly fade previous frame for trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let char;

    // Use translation queue if available
    if (translationQueue.length && Math.random() > 0.7) {
      char = translationQueue.shift();
    } else {
      char = glyphs[Math.floor(Math.random() * glyphs.length)];
    }

    // Glow and pulsate effect
    const glowIntensity = 10 + 10 * Math.sin(Date.now() / 200 + i); // pulsate
    ctx.shadowColor = "#00ff9c";
    ctx.shadowBlur = glowIntensity;

    ctx.fillStyle = "#00ff9c";
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}
