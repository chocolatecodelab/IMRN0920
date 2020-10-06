console.log("No. 1");
const golden = () => { 

    console.log("This is golden!!");
}

golden();

console.log("--------");
console.log("No. 2");

const newFunction = (first, last) => {
    const firstName = {first};
    const lastName = {last};
    console.log(`${firstName.first} ${lastName.last}`);

} 

newFunction("william", "Imoh");

console.log("------");
console.log("No. 3");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation);

console.log("-----");
console.log("No. 4");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);

console.log("-----");
console.log("No. 5");

const planet = "earth";
const view = "glass";
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim as minim veniam`;

console.log(before);