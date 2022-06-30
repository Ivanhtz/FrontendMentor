// HTML references
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const score3 = document.querySelector(".score3");
const score4 = document.querySelector(".score4");
const score5 = document.querySelector(".score5");

const point = document.querySelector(".point");

const card2 = document.querySelector(".card2");

const btn = document.querySelector(".btn");

const show = () => {
  console.log(score1.textContent);
};

const showCard2 = () => {
  card2.classList.add("z");
};

btn.addEventListener("click", showCard2);
