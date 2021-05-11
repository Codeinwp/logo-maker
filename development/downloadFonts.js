/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const https = require('https')
const googleFontsList = require("./../src/assets/fonts/fonts.json")

const buildUrl = (sourceFolder, folder, fileName) => `https://raw.githubusercontent.com/google/fonts/main/${sourceFolder}/${folder}/${fileName}`

const writeToFile = (stream, file) => {
    stream.pipe(file)
    file.on('finish', () => {
        file.close(() => console.log('File created!', file.path))
    })

    file.on('error', (err) => {
        fs.unlink(fileDest)
        console.log('File Err:', err)
    })
}

const downloadFontsFromGithub = (fontName) => {
    const fileName = fontName.split(' ').join('') + '-Regular.ttf'
    const folder = fontName.split(' ').join('').toLowerCase()

    const fileDest = `./fonts/${fileName}`
    const file = fs.createWriteStream(fileDest)

    const makeRequest = (url, cb) => {
        const req =  https.get(url, response => {
            if (response.statusCode === 404) {
                return cb()
            } else if (response.statusCode === 200) {
                writeToFile(response, file)
            }
    
            req.on('error', (err) => {
                fs.unlink(fileDest)
                console.log('Request Err:', err)
            })
        })
    }
    console.log(buildUrl('ofl', folder, fileName))
    makeRequest(buildUrl('ofl', folder, fileName), () => {
        console.log("Try to find the font in the 'ofl/folder/static' folder!")
        makeRequest(buildUrl('ofl', folder + '/static', fileName), () => {
            console.log("Try to find the font in the 'apache' folder!")
            makeRequest(buildUrl('apache', folder, fileName), () => {
                console.log("Try to find the font in the 'apache/folder/static' folder!")
                makeRequest(buildUrl('apache', folder + '/static', fileName), () => {
                    console.log("Try to find the font in the 'ufl' folder!")
                    makeRequest(buildUrl('ufl', folder, fileName), () => {
                        console.log(`No more folders to search for ${fileName}!`)
                    })
                })
            })  
        })
    })
}

googleFontsList.forEach(fontName => {
    downloadFontsFromGithub(fontName)
})