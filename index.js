const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the Project Title: "
  },
  {
    type: "input",
    name: "description",
    message: "Enter the Project Description: "
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the Installation Instructions: "
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the Usage Information: "
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter the Contribution Guidelines: "
  },
  {
    type: "input",
    name: "test",
    message: "Enter the Test Instructions: "
  },
  {
    type: "list",
    name: "license",
    message: "Enter the License Type: ",
    choices: ["Apache 2.0", "Boost 1.0", "GNU AGPLv3", "GNU GPLv3", "MIT", "Unlicense"]
  },
  {
    type: "input",
    name: "name",
    message: "Enter Name: "
  },
  {
    type: "input",
    name: "github",
    message: "Enter the GitHub Username: "
  },
  {
    type: "input",
    name: "email",
    message: "Enter the E-mail Address: "
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("./README.md", generateMarkdown({ ...answers }));
    });
}

// Function call to initialize app
init();
