
const resume ={
    "name" : "Gayathri",
    "contactInformation":
     {
      "email": "gayu.abgl@gmail.com",
      "phone": "9788776099",
      "address": {
        "street": "No 8 Thirumalaisamypuram ",
        "city": "Dindigul",
        "state": "Tamilnadu",
        "postalCode": "624003",
        "country": "India"
      },
      "linkedIn": "https://www.linkedin.com/in/gayathri-balakrishnan-9b88446a/",
      "github": "https://github.com/Gayathri-din"
    },
    "summary": "Full-stack developer with 5 years of experience in building web applications using JavaScript, React, Node.js, and MongoDB. Strong focus on delivering high-quality, scalable solutions and passionate about learning new technologies.",
    "experience": [
      {
        "jobTitle": "JO (junior Officer)",
        "company": "SMC cooperative house building society ltd",
        "location": "Dindigul",
        "startDate": "2022",
        "endDate": "10th jan 2023",
        "responsibilities": [
          "supervising the CRM's (customer relation manager)",
          "verifing the documentation "
          
        ]
      },
      {
        "jobTitle": "system analyst",
        "company": "Annamalai indane agency",
        "location": "Kallakurichi",
        "startDate": "june 2015",
        "endDate": "feb 2019",
        "responsibilities": [
          "documantaion process ",
          "customer care service ",
          "cashier"
          
        ]
      }
    ],
    "education": [
      {
        "degree": "B.E Computer Science and Enginnering ",
        "institution": "Anna university",
        "location": "Chinnasalem, Kallakurichi",
        "graduationDate": "2014"
      }
    ],
    "skills": [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "RESTful APIs"
    ],
   
    "certifications": [
      {
        "name": "Ful stack Development ",
        "issuingOrganization": "Guvi ",
        "issueDate": "2023"
      }
    ],
    "languages": [
      {
        "language": "English",
        "proficiency": "Native"
      },
      {
        "language": "Tamil",
        "proficiency": "Native "
      }
    ]
  };
  // Using a for loop
for (let i = 0; i < resume.experience.length; i++) {
  console.log(`Experience ${i + 1}: ${resume.experience[i].jobTitle}`);
}

// Using a for...in loop
for (let key in resume.contactInformation) {
  console.log(`${key}: ${resume.contactInformation[key]}`);
}

// Using a for...of loop
if (Array.isArray(resume.projects)) {
  for (let project of resume.projects) {
    console.log(`Project: ${project.name}`);
  }
} else {
  console.log("resume.projects is not an array or is undefined.");
}

// Using forEach
resume.skills.forEach(skill => {
  console.log(`Skill: ${skill}`);
});
  