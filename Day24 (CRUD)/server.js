const fs = require('fs')
function createFile(){
    fs.writeFileSync('Intro.txt','I am Vasavi')
    console.log("File is created")
}
// createFile();

function readFile(){
    let Data = fs.readFileSync('Intro.txt','utf-8')
    console.log(Data)
}
readFile();

function updateFile(){
    fs.appendFileSync('Intro.txt',' I am Pursuing B-tech 3rd year.')
    console.log("File is updated")
}
// updateFile();

function deleteFile(){
    fs.unlinkSync('Data.txt')
    console.log("File is deleted")
}
// deleteFile();