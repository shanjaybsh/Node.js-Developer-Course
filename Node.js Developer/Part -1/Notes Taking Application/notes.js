const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {     // Arrow function
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title) // Given title == Existing Title

    if (!duplicateNote) {   // Given title != existing  title
        notes.push({         // Then Add Data to JSON file
            title: title,
            body: body
        })
        saveNotes(notes)         
        console.log(chalk.green.inverse('New note added!'))    // if note add 
    } else {
        console.log(chalk.red.inverse('Note title taken!'))    // If Title  == Existing Title
    }
}

const removeNote = (title) => {    // Arrow Function 
    const notes = loadNotes()      // Check in JSON file
    const notesToKeep = notes.filter((note) => note.title !== title) 

    if (notes.length > notesToKeep.length) {         // Note Title == Title it will removed
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)                       // Remaning Note are saved to JSON file
    } else {   
        console.log(chalk.red.inverse('No note found!'))  // Note Title != Title  
    }    
}

const listNotes = () => {   // Check in the JSON file
    const notes = loadNotes() 

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {    // Display the Node Title
        console.log(note.title) 
    })
}

const readNote = (title) => { 
    const notes = loadNotes()   // Check Data in JSON File
    const note = notes.find((note) => note.title === title)  // Given Title == Note Title

    if (note) {                // Display the Note Data
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {                     // Given Title != Note Title
        console.log(chalk.red.inverse('Note not found :('))         //return  Note not Found
    }
}

const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)   // Convert JavaScript object into JSON stringify
    fs.writeFileSync('notes.json', dataJSON)    // Create JSON file and Write Note Data 
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')  // Read Data in JSON file
        const dataJSON = dataBuffer.toString()     // Convert Buffer Data into String
        return JSON.parse(dataJSON)   // Convert JSON string into JavaScript Object
    } catch (e) { 
        return []   // Return Empty Note Data
    }
}

module.exports = {   // Export data 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
