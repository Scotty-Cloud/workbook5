let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

//? Who is the Academy Member whose ID is 187?
let academyID = academyMembers.find((member) => member.memID === 187);
let memberID = (academyID && academyID.name) || "Not found";
console.log(`The member who has the ID of 187 is: ${memberID}`);


//? Who has been in at least 3 films?
let threePlusFilms = academyMembers.filter(
  (member) => member.films.length >= 3);
let memberNames = threePlusFilms.map((member) => member.name).join(", ");
console.log(`The members who have been in 3 or more films are: ${memberNames}`);

//? Who has a name that starts with "Bob"?
let matchingMembers = academyMembers.filter((member) =>
  member.name.startsWith("Bob")
);
let names = matchingMembers.map((member) => member.name);
console.log(`The members whose name starts with "Bob" is: ${names.join(", ")}`);

//? HARDER: Which Academy Members have been in a film
let featuredIn = academyMembers.map((member) => {
  return {
    memID: member.memID,
    name: member.name,
    hasFilm: member.films.length > 0,
  };
});
console.log(
  `The members who have been in a film are: ${featuredIn
    .filter((member) => member.hasFilm).map((member) => `${member.name}`).join(", ")}`);

//? that starts with "A"
let startsWithA = academyMembers.map((member) => {
  return {
    memID: member.memID,
    name: member.name,
    filmsWithA: member.films.some((film) => film.startsWith("A")),
  };
});
console.log(
  `The members who have been in a film starting with "A" is: ${startsWithA
    .filter((member) => member.filmsWithA).map((member) => `${member.name}`)}`);