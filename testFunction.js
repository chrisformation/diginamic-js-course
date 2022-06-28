/*
console.log(add(2,3));

/!**
 * Add the two parameters
 * @param a
 * @param b
 * @returns number
 *!/
function add(a, b) {
  return a + b;
}

function creerFonction() {
  var nom = "Mozilla";
  function afficheNom() {
    return nom;
  }
  return afficheNom;
}

let maFonction = creerFonction;// à ne pas confondre avec let maFonction =
console.log(maFonction()());
*/

let cpt = 0;

function dumpCpt () {
  setTimeout(function () {
    cpt++;
    console.log(cpt);

    if (cpt !== 5) {
      dumpCpt();
    } else {
      console.log("Abandonned!")
    }
  }, 1000);
}

dumpCpt();
