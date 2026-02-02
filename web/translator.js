import { cuneiformMap } from "./cuneiformMap.js";

window.run = () => {
  const text = document.getElementById("input").value.toLowerCase();
  let output = "";

  for (let char of text) {
    output += cuneiformMap[char] || "𒀭";
  }

  document.getElementById("output").textContent = output;
};
