const notes = require('./notes')
const yargs = require('yargs')


//debugger
//create commands with yargs:
//add
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }

})
//remove
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder:{
        title: {
            describe:' Remove an elemente',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){ notes.removeNote(argv.title)}

})
//read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){ notes.readNote(argv.title)}

})
//list
yargs.command({
    command: 'list',
    describe: 'list all the note',
    handler: function(){notes.listNotes()}

})
yargs.parse()
