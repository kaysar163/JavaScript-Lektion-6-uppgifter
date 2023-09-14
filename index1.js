// Skapa en array med initiala värden
var minArray = [10, 20, 30, "fyrtio", true];

// Hitta antalet element i arrayen
var antalElement = minArray.length;

// Skriv ut sista elementet
if (antalElement > 0) {
  var sistaElement = minArray[antalElement - 1];
  console.log("Det sista elementet i arrayen är: " + sistaElement);
} else {
  console.log("Arrayen är tom.");
}

