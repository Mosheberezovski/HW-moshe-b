var nam = prompt("Please enter your name")
  .replace(/[^a-zA-Z]/g, "")
  .split("");
alert(nam);
var letters = [];
var consonants = [];
joint (nam)
function joint(x) {
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    if (
      element !== "a" &&
      element !== "e" &&
      element !== "u" &&
      element !== "i" &&
      element !== "o"
    ) {
      letters.push(element);
    } else {
      consonants.push(element);
    }
  }
  letters = letters.sort();
  consonants = consonants.sort();
  alert(letters);
  alert(consonants);
}
