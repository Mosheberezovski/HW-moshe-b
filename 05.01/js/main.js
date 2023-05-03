ss ()
function ss() {
  var stud = prompt("הזן בבקשה 5 שמות של תלמידים");
  stud = stud.split(" ");
  var sortedStud = stud.sort().join(" ,");
  if (sortedStud === "") {
     alert("בוק, למה לא הזנת כאן נתונים?");
  } else if (stud.length <= 4) {
    alert("ביקשתי 5 שמות ואתה הזנת רק " + stud.length + " שמות");
  } else {
    alert("השמות המסודרים בסדר אלפביתי הם: "+sortedStud);
  }
}