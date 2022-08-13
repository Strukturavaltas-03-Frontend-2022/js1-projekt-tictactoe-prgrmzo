/* Saját logika */

const cells = document.querySelectorAll(".cell");
const newGameBtn = document.querySelector(".newGame-btn");
let stepCount = 0;
let startMark;
let nextMark;
let mark = "X";

/* Jel elhelyezése */
function putMark() {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.innerHTML = mark;
      stepCount += 1;
      cell.style.pointerEvents = "none";
    });
  });
}

if (putMark) {
  putMark();
}
/* Új játék kezdése */
function clearField() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.style.pointerEvents = "auto";
  });
  stepCount = 0;
}
newGameBtn.addEventListener("click", clearField);
