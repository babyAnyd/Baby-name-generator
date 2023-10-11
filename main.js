const form = document.getElementById("form");
const gender = document.getElementById("gender");
const textValue = document.getElementById("floatingTextarea");

const babyName = [
  {
    boy: {
      firstName: [
        "Tyler",
        "Jamie",
        "Harvey",
        "Alfie",
        "John",
        "Paul",
        "Jacob",
        "Jack",
        "Billy",
        "Archie",
        "Al",
        "Jaiden",
        "Lee",
        "Jesse",
        "Oliver",
        "Joshua",
        "Oliver",
        "Joshua",
        "James",
      ],
      secondName: [
        "James",
        "Lee",
        "Jay",
        "Paul",
        "George",
        "James",
        "Ray",
        "Dean",
        "Joe",
        "Jack",
        "Ameen",
      ],
    },
  },
  {
    girl: {
      firstName: [
        "Maya",
        "Mila",
        "Elena",
        "Rose",
        "Aria",
        "Naomi",
        "Claire",
        "Victoria",
        "Lucy",
        "Elsa",
        "Athena",
        "Aurora",
        "Scarlett",
        "Stella",
        "Isla",
        "Penelope",
        "Sarah",
        "Maya",
        "Mila",
        "Elena",
        "Rose",
        "Aria",
        "Naomi",
        "Claire",
        "Victoria",
      ],
      secondName: [
        "Emma",
        "Charlotte",
        "Eleanor",
        "Olivia",
        "Abigail",
        "Sofia",
        "Aurora",
        "Scarlett",
        "Stella",
        "Isla",
        "Penelope",
        "Sarah",
        "Rose",
        "Phoebe",
        "Maria",
        "Jasmine",
        "Isla",
        "Julia",
        "Leah",
        "Mary",
        "Iris",
        "Esme",
      ],
    },
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let textInput = "select gender";

function selectValue() {
  textInput = gender.value;
}

function generateNames() {
  if (textInput == "select gender") {
    textValue.value = `Pamili lage ug gender dzae!`;
    textValue.style.color = "red";
  } else {
    genderType(textInput);
    textValue.style.color = "";
  }
}

function genderType(gen) {
  let genIndex = 0;
  let genInputs = gen;
  if (genInputs == "boy") {
    genIndex = 0;
  } else {
    genIndex = 1;
  }

  let genObject = babyName[genIndex];
  const getValues = Object.values(genObject)[0].firstName;
  const getFirstName = getValues[Math.floor(Math.random() * getValues.length)];
  const getSecondName = getValues[Math.floor(Math.random() * getValues.length)];
  textValue.value = `${getFirstName} ${getSecondName}`;
}

function resetBtn() {
  form.reset();
  textInput = "select gender";
}
