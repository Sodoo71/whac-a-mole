let score = 0;
let currentMoleIndex = 0;

const holes = document.querySelectorAll(".hole");
const scoreText = document.querySelector(".num"); 

for (let i = 0; i < holes.length; i++) {
  const mole = document.createElement("div");
  mole.style.display = "none";
  mole.className = "mole";
  mole.id = i;

  mole.addEventListener("click", () => {
    mole.style.backgroundImage = "url('./image/dead.png')";
    score += 1;
    scoreText.textContent = score;
    setTimeout(() => {
      mole.style.display = "none";
      currentMoleIndex = null;
      showRandomMole();
      mole.style.backgroundImage =
        "url('./image/ab7ba87f34c5d1d5d8505ed4b88c5e96b7741da1.png')";
    }, 500);
  });

  holes[i].appendChild(mole);
}

function showRandomMole() {
  if (currentMoleIndex === null) {
    const moleIndex = Math.floor(Math.random() * holes.length);
    const moles = document.querySelectorAll(".mole");
    moles[moleIndex].style.display = "block";
    currentMoleIndex = moleIndex;
  }
}

showRandomMole();
