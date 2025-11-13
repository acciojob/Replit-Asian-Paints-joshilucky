const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all items before applying new color
  resetGrid();

  // Apply new color
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", resetGrid);

function resetGrid() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
}
