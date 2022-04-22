
// const notes = ["note 1", "note 2 ", "note 3"];

// console.log(notes.length);
// notes[2] = "this is the new note 3"
// console.log(notes.length);
// console.log(notes)

const notes = [{
    title: "checmistry ",
    body: "chemistry note "
},
{
    title: "biology",
    body: "biology note"
},
{
    title: "mathematics",
    body: "mathematics notes"
}
]
const findNote = function(notes, noteTitle) {
    const index = notes.findIndex(function(note, index){
        return note.title === noteTitle
    })
    return notes[index]
}
const note = findNote(notes, 'biology')
console.log(note)

const filterNotes = notes.filter(function(note, index){
    return note
})
console.log(filterNotes)

const sorting = ["heritier", "ganza", "tamba", "davy"];

let display = sorting.sort();
let reverse = sorting.reverse();
console.log(display);
console.log(reverse);