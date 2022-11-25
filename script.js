//Q1; For a given JSON iterate over all for loops:
//===>



// var Exam_results = {
//     "name": "vignesh",
//     "marks": "87%",
//     "remarks": "much need more concentration in studies",
//     "subjects": ["English","Tamil","Chemistry", "Maths"]
// }
// for(var i=0;i<Exam_results.subjects.length;i++) {
//     console.log(Exam_results.subjects[i]);
// }

// output: 
// script.js:8 English
// script.js:8 Tamil
// script.js:8 Chemistry
// script.js:8 Maths
// (index):39 Live reload enabled.

// --------------------------------------------------------------------------------------

//for in method: 

// var Exam_results = {
//     "name": "vignesh",
//     "marks": "87%",
//     "remarks": "much need more concentration in studies",
//     "subjects": ["English","Tamil","Chemistry", "Maths"]
// }
// for(i in Exam_results.subjects) {
//     console.log(Exam_results.subjects[i]);
// }

//output: 
// script.js:29 English
// script.js:29 Tamil
// script.js:29 Chemistry
// script.js:29 Maths

//--------------------------------------------------------------------------------------------


// for of method:

// var numbers = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
//   };
  
//   for (var ans of Object.values(numbers)) {
//     console.log(ans);
//   }

//   output: 
//   1
//   2
//   3
//   4

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//Q2 create a resume using JSON format

// var resume = {
//     "Name": "vignesh",
//     "Age": "23",
//     "Gender": "male",
//     "Mobile": "+91 8667520104",
//     "Address": "12, Gandhi Street, Chennai",
//     "Location": "Chennai,India",
//     "Qualification": "M.Sc Biotechnology",
//     "University": "Sri Ramachandra University, Porur, Chennai",
//     "Experience": "0 Years",
//     "Project":
//       "Isolation of Mangrove Rhizophora Bacteria to see a anti-pathogenic activities",
//     "Industrial_Exposure":
//       "Done 1 month internship in Apex laboratories chennai (quality control dept.)",
//     "Languages_Known": "English, Tamil(Mother tongue)",
//     "Skills":
//       "well trained in the wet laboratory works, typewriting senior level certified by govt. of TamilNadu, Professionally certified and completed training in Medical coding,Microsoft office, HTML, CSS, JS,",
//   };
//   console.log(resume);

//=========================================================================================



  
  // OutPut:
  
  // Object
  // Address
  // : 
  // "12, Gandhi Street, Chennai"
  // Age
  // : 
  // "23"
  // Experience
  // : 
  // "0 Years"
  // Gender
  // : 
  // "male"
  // Industrial_Exposure
  // : 
  // "Done 1 month internship in Apex laboratories chennai (quality control dept.)"
  // Languages_Known
  // : 
  // "English, Tamil(Mother tongue)"
  // Location
  // : 
  // "Chennai,India"
  // Mobile
  // : 
  // "+91 8667520104"
  // Name
  // : 
  // "vignesh"
  // Project
  // : 
  // "Isolation of Mangrove Rhizophora Bacteria to see a anti-pathogenic activities"
  // Qualification
  // : 
  // "M.Sc Biotechnology"
  // Skills
  // : 
  // "well trained in the wet laboratory works, typewriting senior level certified by govt. of TamilNadu, Professionally certified and completed training in Medical coding,Microsoft office, HTML, CSS, JS,"
  // University
  // : 
  // "Sri Ramachandra University, Porur, Chennai"
  // [[Prototype]]
  // : 
  // Object
  



