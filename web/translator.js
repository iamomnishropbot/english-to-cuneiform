;import { cuneiformMap } from "./cuneiformMap.js";

window.run = () => {
  const input = document.getElementById("input").value.toLowerCase();
  let output = "";

  for (let char of input) {
    output += cuneiformMap[char] || "𒀭";
  }

  document.getElementById("output").textContent = output;

  // Send translation to the matrix rain
  window.addTranslatedText(output);
};

const typingSpeedFactor = 2; // adjust speed of glyphs per typed letter

document.getElementById("input").addEventListener("input", () => {
  for (let i = 0; i < typingSpeedFactor; i++) {
    window.addTranslatedText(" "); // add small bursts to speed up fall
  }
});
