// GIVEN a command-line application that accepts user input
import inquirer from "inquirer"; 
// const generateLogo = require('./utils/generateLogo');  getting an error about ES module scope. this is confusing from last week!

const questions = [
    {
        type: 'string',
        name: 'text',
        message: 'Enter text up to 3 letters: ',
    },
    {
        type: 'string',
        name: 'text color',
        message: 'What color is the text?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape is your logo?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'string',
        name: 'shape color',
        message: 'What color is the shape?',
    }
]

inquirer
    .prompt(
        questions
    )
    .then((answers) => {
        console.log(answers)
        createLogo('./utils/logo.svg')
    })
    .catch((error) => {
    console.log(error)
    });

function createLogo() {
    console.log('Generated logo.svg')
    //creates .svg file 
    //300x200 pixel image that matches criteria 
}