//תרגיל 1

//מבקש מהמשתמש להזין את שמו, הופך לכתב קטן, מסנן סימנים שאינם אותיות ומכניס למחרוזת
var nam = prompt("Please enter your name").toLowerCase().replace(/[^a-zA-Z]/g, "").split("");
// מגדיר משתנים לתנועות ולמשתנים
var letters = [];
var consonants = [];
//קורא לפונקציה
joint (nam);
//קורא ומכניס פונקציה למשתנה
a=Textthread (consonants,letters);
//מדפיס תוצאה
alert (a);

//הגדרת פונקציה
function joint(x) {
  //לולאת פור לבדיקה אם לא עיצורים
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    if (
      element !== "a" &&
      element !== "e" &&
      element !== "u" &&
      element !== "i" &&
      element !== "o"
    ) //אם עמד בתנאי זה עיצורים ומכניס למשתנה של עיצורים
      {letters.push(element);
      //אם לא עמד בתנאי זה תנועה ומכניס למשתנה תנועה
    } else {
      consonants.push(element);}
    }
  
  //מסדר לפי אב עם המתודה סורט
  letters = letters.sort();
  consonants = consonants.sort(); 
  return (letters,consonants);
}
//מגדיר פונקציה לשרשור טקסט ואותיות
function Textthread(y,z) {
  var text= `Your string contains the following vowels: ${y} And the following consonants: ${z}`;
  return (text);
}

//תרגיל 2

//מבקש קלט
a = prompt("Write something, for my part you can something very long...")
  //מנקה תוים
  .replace(/[^a-zA-Z]/g, "")
  //הופך הכל לכתב גדול
  .toUpperCase()
  //מכניס הכל למערך
  .split("")
  //מסדר לפי אב
  .sort();
//קורא לפונקציה
countLetters(a);

//מגדיר פונקציה
function countLetters(string) {
  // מגדיר משתנה לתוכו ייכנס האוביקט
  var letterCounts = [];
  // מייצר לולאת פור לבדיקת המערך
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    // עובר על כל האברים של לטר באובייקט אם יש כפול דרך פינד (לא למדנו בשיעור, למדתי לבד בגי פי טי) 
    var letterCount = letterCounts.find(function (item) {
      return item.letter === char;
    });
    // אם לא מוצא את האות באוביקט זו הפעם הראשונה והוא מכניס אותה לאוביקט ומוסיף באומונט שבאוביקט מספר 1
    if (!letterCount) {
      letterCounts.push({
        letter: char,
        amount: 1,
      });
    }
    // אם כבר מוצא את זה במערך מוסיף לאמונט עוד אחד במערך
    else {
      letterCount.amount++;
    }
  }
  //הפונקציה פולטת את האובייקט
  return letterCounts;
}
// הדפסה לקונסול:
console.log(countLetters(a));
