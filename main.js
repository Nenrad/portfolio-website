projectCards = document.querySelectorAll(".project-cards__project-card");
modalEl = document.getElementById("modal-window");
modalContentEl = document.getElementById("modal-window__content");

projectDescriptions = {
  javaScriptCalculator: {
    title: `JavaScript Calculator`,
    description: `In this project I built a calculator that supports addition, subtraction, multiplication, division, and exponentiation. In addition, this calculator can compute entire expression involving the above mentioned operations. That is, it supports order of operations!`,
    improvements: `There is certainly room for improvement in this project. For example, while one can chain expressions (use the result of previous calculations in new ones), if the numbers get too big then the output is given in e notation which cannot be correctly interpreted by my program. I also think this calculator is missing a very important feature: parentheses. More fundamentally, this project could be improved significantly by my using a syntax tree instead of the approach I developed from scratch.`,
    link: "#",
  },
};

modalContentEl.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  modalEl.style.display = "none";
});

for (let i = 0; i < projectCards.length; i++) {
  let el = projectCards[i];
  el.setAttribute("id", `card-${i + 1}`);
  el.addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("modal-window").style.display = "flex";
    document.getElementById("content__description").innerText =
      projectDescriptions.javaScriptCalculator.description;
    document.getElementById("content__improvements").innerText =
      projectDescriptions.javaScriptCalculator.improvements;
    document.getElementById("content__title").innerText =
      projectDescriptions.javaScriptCalculator.title;
  });
}

{
  let yourtext = [
    ["software engineer.", "#896265"],
    ["designer.", "#896265"],
    ["human.", "#896265"],
  ];

  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 100;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);
}
