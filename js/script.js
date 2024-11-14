let htmlElement = document.querySelector("div"); //only brings the first one of ist type if ther are multiple occurences
let htmlElementAll = document.querySelectorAll("div"); //all occurences of the element

/**comments in javascript */
//return_type function_name(parameters){
//logic
//return
//}

//input name attribute and value attribute

function sum(para1, para2) {
  //logic
  //return
}

let outputVar = sum(2, 5);

let sumArrow = (para1, para2) => {
  //logic
  //return
};

let sumArrow2 = (p1, p2) => {
  return p1 + p2;
};

sumArrow(2, 5);

htmlElement.addEventListener("click", (e) => {
  //e.target.value
  //e.target.name
  //logic
  //?
});

if ("21" == 21);

if ("21" === 21)
  //what is the difference between == and === in js

  //not ''
  console.log(`The user input name is ${firstName} ${lastName}`);

let student = {
  studentName: "john",
  studentGPA: 2.45,
  studentAddress: {
    street: "123 street",
    zip: 64312,
    state: "MO",
  },
  studentHobby: ["swimming", "reading", "gamedev"],
  studentMajorStanding: true,
};

studentFromMO = student.filter((student) => {
  //logic to filter students where state is MO
});

//.forEach(callBackFunction)
//.map()
//.filter
