const admins = document.querySelector(".admins");
const developers = document.querySelector(".developers");
const selectProfession = document.querySelector("select");
const filterButton = document.getElementById("Filter");
let addUser = document.getElementById("addUserBtn");

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
]

employees.forEach(addToList);

filterButton.addEventListener('click',filterByProfession);

function filterByProfession(event) {
    developers.innerText = " ";
    admins.innerText = "";
    let profession = selectProfession.value;

    if(profession == "") {
        alert("Please select the Profession to filter");
        employees.forEach(addToList);
    }
    else if(profession == "developer") {
        const allDevelopers = employees.filter(onlyDevelopers);
        allDevelopers.forEach(addToList);
    }
    else if(profession == "admin"){
        const Alladmins = employees.filter(onlyAdmins);
        Alladmins.forEach(addToList);
    }
}

function addToList(employee) {
    let {name,profession,age} = employee;
    name = name[0].toUpperCase() + name.slice(1);
    profession = profession[0].toUpperCase() + profession.slice(1);

    let listElement = document.createElement("li");

    listElement.innerHTML = `<span>Name :${name}</span><span>Profession: ${profession}</span><span>Age: ${age}</span>`

    if(profession == "Admin") {
        //add to admin list
        admins.append(listElement);
    }
    else if(profession == "Developer") {
        developers.append(listElement);
    }
}

function onlyDevelopers(employee) {
    return employee.profession == "developer";
}
function onlyAdmins(employee) {
    return employee.profession == "admin";
}


var newData = document.getElementById("newData");

addUser.addEventListener('click',addNewData);


function addNewData(){
    let profession2 = document.getElementById("profession4").value;
    let age2 = document.getElementById("age4").value;
    let name2 = document.getElementById("name4").value;
     newData.innerHTML = `<span>Name :${name2}</span><span>Profession: ${profession2}</span><span>Age: ${age2}</span>`
}
