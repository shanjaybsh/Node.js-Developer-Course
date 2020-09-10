const yargs = require('yargs')
const chalk = require('chalk')
const notesFun = require('./notes.js')

//Create Add Command
yargs.command({
    command: 'add', // Yargs add command
    describe: 'Adds a Note', // Command Description
    builder: {    // It used to Add data to the note
                title: {          // Notes Title
                            describe: 'Contains title of the Note',
                            type: "string", //Title type
                            demandOption: true
                        },
                body:  {          // Notes body
                            describe: 'Contains body of the Note',
                            type: "string",
                            demandOption: true
                        },        
             },
    handler: function(argv){
       notesFun.add(argv.title,argv.body) // To add --title ="Some Title" --body="Some Content" 
    }  
})

//Create Remove Command
yargs.command({
    command: 'remove', //Yargs Remove Command
    describe: 'Removes a Note', // Command Description
    builder: {    // It used to Remove data in the Note
                title: {           //Notes title
                            describe: 'Contains title of the Note',
                            type: "string",
                            demandOption: true
                        }   
             },
    handler: function(argv){
        notesFun.remove(argv.title)   // remove --title="Existing title "
    }  
})

//Create Read Command
yargs.command({
    command: 'read', // Yargs Read command
    describe: 'Reads a Note', // Command Description
    builder: {  // It used to read data in the Note
                title: {       // Notes Title
                            describe: 'Contains title of the Note',
                            type: "string", 
                            demandOption: true
                        }
             },
    handler: function(argv){
       notesFun.read(argv.title)    // read --title="Existing Title"
    }  
})

//Create List Command
yargs.command({
    command: 'list', //Yargs List command
    describe: 'List all Notes', // Command Description
    handler: function(argv){
        notesFun.list()       // List --title="Existing Title"
    }  
})

yargs.parse() // Display a data
