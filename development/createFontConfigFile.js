/* eslint-disable @typescript-eslint/no-var-requires */

// Importing the Required Modules 
const fs = require('fs'); 
const readline = require('readline'); 

const file = readline.createInterface({ 
    input: fs.existsSync('development/fonts.txt') ? fs.createReadStream('development/fonts.txt') :  fs.createReadStream('fonts.txt'), 
    output: process.stdout, 
    terminal: false
}); 
  
const fonts = []
file.on('line', (line) => { 
    fonts.push(line.trim())
}); 

file.on('close', () => {
    console.log(`Total Fonts: ${fonts.length} :`,fonts )

    fs.writeFileSync( './src/assets/fonts/fonts.json', JSON.stringify(fonts, {}, 4), function(err) {
        if (err) throw err;
        console.log('Fonts JSON file created');
    } )

    // const webpackFonts = fonts.map( function(font){
    //     return {
    //         family: font
    //     }
    // })

    // fs.writeFileSync( './webpack.fonts.json', JSON.stringify(webpackFonts, {}, 4), function(err) {
    //     if (err) throw err;
    //     console.log('Webpack Fonts JSON file created');
    // } )
})

