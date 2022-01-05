// Global Includes
const path = require('path');
const fs = require('fs');

// Local Includes
const svg = require('./SVGUtilities');
const colors = require('./DuckColorConstants');

function getItemData(type, number) {

    // Get the File Path
    const itemPath = path.join(
        __dirname,
        "../../../",
        "ducks/",
        type,
        `/${number}.svg`,
    );

    // Check if File Exists
    if (!fs.existsSync(itemPath)) return [];

    // Get the File Data
    const itemData = fs.readFileSync(itemPath, "ascii");
    const strippedData = svg.stripParentTags(itemData);

    // Return the String
    return strippedData.split("\n");

}

function generateDuck(duckData) {

    // Make Sure Everything is Defined
    const trueDuckData = {
        hat: duckData.hat || 0,
        eyes: duckData.eyes || 0,
        beak: duckData.beak || 0,
        wings: duckData.wings || 0,
        smoke: duckData.smoke || 0,
        tail: duckData.tail || 0,
        item: duckData.item || 0,
        color: colors[duckData.color] || colors[3],
        beakColor: colors[duckData.beakColor] || colors[5],
    };
    
    // Setup the Output
    const output = [];

    // Add the Body (Spread it First)
    output.push(...getItemString("body", trueDuckData.tail));

    // If theres a Gradient Background, Add It In
    if (gradientBackground(trueDuckData)) output.push(gradientData);  

    

}