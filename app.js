const simpleColor = ["red", "green", "blue", "yellow", "white", "purple"];
const clickBTN = document.getElementById("clickBTN");
const colorName = document.querySelector(".colortype");
clickBTN.addEventListener("click", () => {
  let selection = getRandom();
  document.querySelector(".main").style.background = simpleColor[selection];
  colorName.innerHTML = simpleColor[selection];
});

const getRandom = () => {
  return Math.floor(Math.random() * simpleColor.length);
};
