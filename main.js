weatherAppTryButton = document.querySelector(".weatherapp-modal-try-button");
calculatorTryButton = document.querySelector(".calculator-modal-try-button");

weatherAppTryButton.addEventListener("click", () => {
  window.open("https://jscalc.seanogary.dev/");
});

calculatorTryButton.addEventListener("click", () => {
  window.open("https://weatherapp.seanogary.dev/");
});

console.log(calculatorTryButton);

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
