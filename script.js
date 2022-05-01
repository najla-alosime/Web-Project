const tomjerry = document.getElementById("tomjerry");
const Catch = document.getElementById("catch");
const score = document.getElementById("score");

function jump() {
  tomjerry.classList.add("jump-animation");
  setTimeout(() =>
  tomjerry.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!tomjerry.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const tomjerryTop = parseInt(window.getComputedStyle(tomjerry)
    .getPropertyValue('top'));
  const CatchLeft = parseInt(window.getComputedStyle(Catch)
    .getPropertyValue('left'));
  score.innerText++;

  if (CatchLeft < 0) {
    Catch.style.display = 'none';
  } else {
    Catch.style.display = ''
  }

  if (CatchLeft < 50 && CatchLeft > 0 && tomjerryTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
