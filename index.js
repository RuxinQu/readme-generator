// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What\'s the title of your project?',
        validate: function (input) {
            if (!input) {
                return 'Please enter the title of your project!'
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use this project:'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide the name of the screenshot in the assets/images folder'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please list the github username of your collaborator(s) (if any)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How users can contribute to your project (if any).'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for project, and explain how to test (if any).',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('File successfully written to disk');
    })

}

// TODO: Create a function to initialize app
async function init() {
    const result = await inquirer.prompt(questions);
    writeToFile('exampleREADME.md', generateMarkdown(result))

}

// Function call to initialize app
init();


