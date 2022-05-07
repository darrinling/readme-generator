// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "List your collaborators' gitHub profile(s), if any."
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['MIT', 'Apache', 'Mozilla Public License', 'AGPL', 'GPL', 'LGPL'],
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const content =
  `# ${data.title}

  ## Table of Contents
  [Description](#description)
  [Usage](#usage)
  [Installation](#installation)
  [Contributing](#contributing)
  [License](#license)
  [Testing](#testing)
  [Questions](#questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Collaborators
  ${data.collaborators}

  ## License
  ${data.license}

  ## Testing
  ${data.testing}

  ## Questions
  ${data.questions}`

  fs.writeFile('readme.md', content, err => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      writeToFile(responses)
    })
}

// Function call to initialize app
init();
