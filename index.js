// GIVEN a command-line application that accepts user input
const inquirer = require("inquirer"); 
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shape');
const { error } = require("console");
//const generateLogo = require('./utils/generateLogo');  

const questions = [
    {
        type: 'string',
        name: 'text',
        message: 'Enter text up to 3 letters: ',
    },
    {
        type: 'string',
        name: 'text_color',
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
        name: 'shape_color',
        message: 'What color is the shape?',
    }
]

inquirer
    .prompt(
        questions
    )
    .then((answers) => {
        console.log(answers)
        let newShape;
        if(answers.shape === 'circle') {
            newShape = new Circle()
        } else if (answers.shape === 'triangle') {
            newShape = new Triangle()
        } else {
            newShape = new Square()
        }
        newShape.setShapeColor(answers.shape_color)
        newShape.setText(answers.text)
        newShape.setTextColor(answers.text_color)
        createLogo('./utils/logo.svg', newShape.render())
    })
    .catch((error) => {
    console.log(error)
    });

function createLogo(fileName, template) {  
    fs.writeFile(fileName, template, (error) => {
        if (error) {
            console.log(error)
        }
        console.log('Generated logo.svg')
    })
}