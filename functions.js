/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"
// Huiswerk Koos Dorssers

console.log ("Voorbeeld opdracht")
console.log("----------------------------")

function morningGreeter() {
  return "Goedemorgen";
}
const greeting = morningGreeter();
console.log(greeting);

console.log("----------------------------")
console.log(" ")

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

console.log ("Opdracht 1")
console.log("----------------------------")

function getSchool() {
  return "Novi Hogeschool";
}
const school = getSchool();
console.log(school);

console.log("----------------------------")
console.log(" ")

// Test new branch

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

console.log ("Opdracht 2")
console.log("----------------------------")

function compliment() {
  return "Lekker bezig met die functies, Jan!";
}
const showCompliment = compliment();
console.log(showCompliment);

console.log("----------------------------")
console.log(" ")

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

console.log ("Opdracht 3")
console.log("----------------------------")

const grades = [8, 8.5, 6, 7];

function getGrades() {
  return grades;
}
const showGrades = getGrades();
console.log(showGrades);

console.log("----------------------------")
console.log(" ")

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

console.log ("Opdracht 4")
console.log("----------------------------")
const details = ["Jan", "Janssen"]

function getDetails() {
  return details;
}
const showDetails = getDetails();
console.log("firstname: " + details[0] + ", lastname: " + details[1]);

console.log("----------------------------")
console.log(" ")
// Einde huiswerk

