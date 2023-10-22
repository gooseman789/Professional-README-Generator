// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please answer in complete sentences',
                name: 'irrelevant'
            },
            {
                type: 'input',
                message: 'What was your motivation?',
                name: 'motivation'
            },
            {
                type: 'input',
                message: 'Why did you build this project?',
                name: 'build'
            },
            {
                type: 'input',
                message: 'What problem does this solve?',
                name: 'problem'
            },
            {
                type: 'input',
                message: 'What did you learn?',
                name: 'learn'
            },
            {
                type: 'input',
                message: 'How did you install this?',
                name: 'install'
            },
            {
                type: 'input',
                message: 'What use does this application have?',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Please provide a link to a screenshot of the deployed application.',
                name: 'link'
            },
            {
                type: 'input',
                message: 'Did you work on this project alone? Or is there any other entity you would like to credit?',
                name: 'credit'
            },
            {
                type: 'input',
                message: 'What license did you use for your application?',
                name: 'license'
            },
            {
                type: 'input',
                message: "Please put the link of your deployed application",
                name: 'deploy'
            }
         ])
         .then((data) =>
         console.log(data))
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', null, (error) => error ? console.error(error) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(),
    fs.appendFile('README.md', 
        `# Weather


        ![Alt text](/${data.link})


        # Description
        ${data.motivation}
        ${data.build}  
        ${data.problem}
        ${learn}

        # Installation
        ${data.install}

        # Usage
        ${data.usage}

        # Credits
        ${data.credit}  

        # License
        I used the ${data.license} license.

        # Deployed link
        ${daya.deploy} `
)
}

// // Function call to initialize app
// init();
