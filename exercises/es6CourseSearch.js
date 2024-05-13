let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

//? When does the PROG200 course start?
let prog200Course = courses.find(course => course.CourseId === "PROG200");
console.log(`The PROG200 course starts on ${prog200Course.StartDate}`);

//? What is the title of the PROJ500 course?
let proj500Course = courses.find(course => course.CourseId === "PROJ500");
console.log(`The title of the PROJ500 course is: ${proj500Course.Title}`); 

//? What are the titles of the courses that cost $50 or less?
let cheapCourses = courses.filter(course => course.Fee <= 50.00);
let cheapCourseTitles = cheapCourses.map(course => course.Title);
console.log(`The titles of the courses that cost $50 or less are:
${cheapCourseTitles.join(", ")}`);

//? What classes meet in "Classroom 1"?
let classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
console.log(`The courses that meet in Classroom 1 are: 
${classroom1Courses.map(course => course.Title).join(", ")}`);