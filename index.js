// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');

inquirer.prompt([
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
])

class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

Logo.prototype.createLogo = function() {
    //creates .svg file 
    //300x200 pixel image that matches criteria 
    console.log('Generated logo.svg')
}

const starbucks = new Logo(
    'sbx', 
    'white', 
    'circle', 
    'green',
)

starbucks.createLogo()

console.log(starbucks)



// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)