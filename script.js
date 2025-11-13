const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");

const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");

const boxes = document.querySelectorAll(".grid-item");

// Reset all blocks
function resetAll() {
  boxes.forEach(box => {
    box.style.backgroundColor = "transparent";
  });
}

changeButton.addEventListener("click", () => {
  const blockId = blockInput.value;
  const color = colorInput.value;

  resetAll(); // reset before applying new color

  const targetBox = document.getElementById(blockId);
  if (targetBox) {
    targetBox.style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", () => {
  resetAll();
});
