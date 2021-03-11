// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  let square = document.querySelector(".ctverecek");
  square.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  square.style.lineHeight = "30px";
  square.style.paddingTop = "30px";
}

function colorchange() {
  let square = document.querySelector(".ctverecek");
  square.style.backgroundColor = "green";
}

function showresult() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}