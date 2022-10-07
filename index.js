// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What\'s the title of your project?',
        validate: function (input) {
            return !!input || 'Please enter the title of your project!'
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of your project:',
        validate: function (input) {
            return !!input || 'Please enter the description of your project!'
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use this project:',
        validate: function (input) {
            return !!input || 'Please provide instructions on how to use this project!'
        }
    },
    // ==========================================================================================================
    // The code below let users input the filename the screenshot in the assets/images folder and checks whether 
    // the file is existing
    // ==========================================================================================================
    // {
    //     type: 'input',
    //     name: 'screenshot',
    //     message: 'Please provide the filename of the screenshot in the assets/images folder:',
    //     validate: function (input) {
    //         if (!input) {
    //             return 'Please provide the filename of the screenshot in the assets/images folder!'
    //         } else {
    //             const path = Path.join('assets/images', input)
    //             return fs.existsSync(path) || 'File doesn\'t exist!'
    //         }
    //     }
    // },
    {
        type: 'input',
        name: 'credit',
        message: 'Please list the github username of your collaborator(s) (if any, seperate with comma; press Enter if doesn\'t apply)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: [
            "Apache_2.0",
            "GPL_3.0",
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
        message: 'Please provide tests for project, and explain how to test (if any).',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your github username:',
        validate: function (input) {
            return !!input || 'Please provide your github username!'
        }
    },
    {
        type: 'input',
        name: 'reponame',
        message: 'Please provide your github repository name:',
        validate: function (input) {
            return !!input || 'Please provide your github repository username!'
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || 'Please provide your email!';
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('file successfully generated!');
    })
}

// TODO: Create a function to initialize app
async function init() {
    const result = await inquirer.prompt(questions);
    writeToFile('exampleREADME.md', generateMarkdown(result))
}

// Function call to initialize app
init();


