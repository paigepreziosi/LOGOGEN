const inquirer = require('inquirer');
const fs = require('fs');
const {LogoText, Shape, SVG} = require('./lib/shapes');


const questions = [{
    type: 'input',
    message: "What text would you like to use for your logo (3 characters max)?",
    name: 'letters',
},
{
    type: 'input',
    message: "What color would you like your text to be?",
    name: 'fontColor',
},
{
    type: 'list',
    message: "What shape would you like your logo to be?",
    name: 'shape',
    choices: ['square', 'circle', 'triangle'],
},
{
    type: 'input',
    message: "What color would you like your shape to be?",
    name: 'shapeColor',
}
];

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const logoText = new LogoText(response.letters, response.fontColor);
            const shape = new Shape(response.shape, response.shapeColor);
            const svg = new SVG(logoText.render(), shape.render());
            console.log(svg.render());
            fs.writeFile('logo.svg', svg.render(), (err) => {
                if (err) throw err;
                console.log('Generated logo.svg!');
            });
        });
}


init();