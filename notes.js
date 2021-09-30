const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){console.log("your notes")}
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicatedNote = notes.find((note)=>note.title === title)
    //search if the title is already on:
    if(!duplicatedNote){
        //add the object on the array
        notes.push({
            title: title,
            body: body
        })
        //saving the note,
        saveNotes(notes)
        console.log(chalk.bgBlue("new note added"))
    }
    else{
        console.log(chalk.bgRed("The element already exists"))
    }

}

const removeNote = function(title){
    const notes = loadNotes()
    if(notes.find((note)=>note.title === title)){
        const keepNotes= notes.filter((note)=>note.title !== title)
        console.log(chalk.bgBlue("The " + title + " has been deleted"))
        saveNotes(keepNotes)
    }
    else{
        console.log(chalk.bgRed("The element doesn't exists"))
    }
}

const listNotes = function(){
    const notes = loadNotes()
    notes.forEach( (note) => console.log(chalk.bgBlue(note.title)))
}

const readNote = function(title){
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.bgBlue(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.bgRed("The element doesn't exists"))
    }
}

//global methods
const loadNotes = function(){
    try{
        //if works:
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())

    }catch(e){
        //if not works:
        return []
    }
}
const saveNotes = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}