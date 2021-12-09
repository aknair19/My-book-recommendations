const btnjs = document.querySelector("#js");
const btnmovie = document.querySelector("#FrontEnd");
const btnth = document.querySelector("#Java");
const output = document.querySelector("#bookoutput");
const newDiv = document.createElement('div');

var bookDB = {
  JavaScript: [
    {
      name: "Eloquent JavaScript",
      rating: "4.5/5",
    },
    { name: "JavaScript: The Good Parts", rating: "4/5" },
  ],
  FrontEnd: [
    { name: "Modern Front-end Architecture", rating: "4/5" },
    { name: "CSS Secrets", rating: "4.5/5" },
  ],
  Java: [
    { name: "Effective Java", rating: "4/5" },
    { name: "Spring in Action", rating: "3/5" },
  ],
};

function HelloJs() {
  output.innerText = "";
  for (let index = 0; index < bookDB.JavaScript.length; index++) {
    var Result = `Book Name : ${bookDB.JavaScript[index].name} \n Book Ratings : ${bookDB.JavaScript[index].rating}\n\n`;
    output.append(Result + "\n");

  }
}

function HelloFrontEnd() {
  output.innerText = "";
  for (let index = 0; index < bookDB.FrontEnd.length; index++) {
    var Result = `Book Name : ${bookDB.FrontEnd[index].name} \n Book Ratings : ${bookDB.FrontEnd[index].rating}\n\n`;
    output.append(Result + "\n");
  }
}

function HelloJava() {
  output.innerText = "";
  for (let index = 0; index < bookDB.Java.length; index++) {
    var Result = `Book Name : ${bookDB.Java[index].name} \n Book Ratings : ${bookDB.Java[index].rating}\n\n`;
    output.append(Result + "\n");
  }
}

btnjs.addEventListener("click", HelloJs);
btnmovie.addEventListener("click", HelloFrontEnd);
btnth.addEventListener("click", HelloJava);