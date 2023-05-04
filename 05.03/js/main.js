var nam = prompt("Please enter your name").toLowerCase().replace(/[^a-zA-Z]/g, "").split("");
var letters = [];
var consonants = [];
joint (nam);
a=Textthread (consonants,letters);
alert (a);
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
  return (letters,consonants);
}
function Textthread(y,z) {
  var text= `Your string contains the following vowels: ${y} And the following consonants: ${z}`;
  return (text);
}