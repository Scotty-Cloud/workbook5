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

// Who is the Academy Member whose ID is 187?
const academyID = academyMembers.find(member => member.memID === 187);
const memberID = academyID && academyID.name || "Not found";
console.log(`The member who has the ID of 187 is; ${memberID}`);

// Who has been in at least 3 films?
let threePlusFilms = academyMembers.filter(member => member.films.length >= 3);
let memberNames = threePlusFilms.map(member => member.name).join(', ');
console.log(`These are the members who have been in 3 or more films: ${memberNames}`);

// Who has a name that starts with "Bob"?

// HARDER: Which Academy Members have been in a film

// that starts with "A"
