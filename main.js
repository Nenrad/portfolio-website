projectCards = document.querySelectorAll(".project-cards__project-card");
modalEl = document.getElementById("modal-window");
modalContentEl = document.getElementById("modal-window__content");
modalContentButtonEl = document.getElementById("content__button");

projectDescriptions = {
  javaScriptCalculator: {
    title: `JavaScript Calculator`,
    description: `In this project I built a calculator that supports addition, subtraction, multiplication, division, and exponentiation. In addition, this calculator can compute entire expression involving the above mentioned operations. That is, it supports order of operations!`,
    improvements: `While one can chain expressions (use the result of previous calculations in new ones), if the numbers get too big then the output is given in e notation which cannot be correctly interpreted by my program. I also think this calculator is missing a very important feature: parentheses. More fundamentally, this project could be improved significantly by my using a syntax tree instead of the approach I developed from scratch.`,
    link: "https://jscalc.seanogary.dev/",
  },
  weatherApp: {
    title: "Weather API App",
    description:
      "In this project I built a simple weather app. On launch it detects the users location based on their IP address and displays their local weather according to 'The Weather API'. The user is able to request the weather for any other location the API supports via a search bar which features autocomplete. They can save the location they are currently viewing for ease of access in the future (saved in local storage).",
    improvements:
      "The intent of this project was to demonstrate my ability to make API requests, display information dynamically, etc. I believe I accomplished this goal. Nonetheless, I would like to improve the design. I think adding background images that reflect the current weather condition would be a good place to start.",
    link: "https://weatherapp.seanogary.dev/",
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
  console.log(el);
  el.addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("modal-window").style.display = "flex";
    document.getElementById("content__description").innerText =
      projectDescriptions[el.id].description;
    document.getElementById("content__improvements").innerText =
      projectDescriptions[el.id].improvements;
    document.getElementById("content__title").innerText =
      projectDescriptions[el.id].title;
    modalContentButtonEl.addEventListener("click", () => {
      window.open(`${projectDescriptions[el.id].link}`);
    });
  });
}

{
  let yourtext = [
    ["software engineer.", "#e43434"],
    ["designer.", "#e43434"],
    ["human.", "#e43434"],
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
