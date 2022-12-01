const clickBTN = document.getElementById("clickBTN");
const colorName = document.querySelector(".colortype");
const hexColors = [
  "#f56f50",
  "#ff439f",
  "#3f3138",
  "#dac3a9",
  "#475e6b",
  "#893f04",
  "#7b876d",
  "#01786f",
  "#2E4053",
  "#D35400 ",
  "#5B2C6F",
];

clickBTN.addEventListener("click", () => {
  let selection = getRandom();
  document.querySelector(".main").style.background = hexColors[selection];
  colorName.innerHTML = hexColors[selection];
});

const getRandom = () => {
  return Math.floor(Math.random() * hexColors.length);
};
