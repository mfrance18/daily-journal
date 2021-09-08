import { EntryListComponent } from "./feed/JournalEntryList.js";
import { getEntries, useEntryCollection, createEntry } from "./data/DataManager.js"
import { PostEntry } from "./feed/PostEntry.js";

const journalElement = document.querySelector("main")

journalElement.addEventListener("click", event => {
    if (event.target.id === "recordButton") {
        console.log("Record Entry")
    } else if (event.target.id.startsWith("edit")) {
        alert("Edit button clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])
    } else if (event.target.id === "newPost__submit") {
        //clear the input fields
    }
})


//work in progress for filter by mood
// journalElement.addEventListener("change", event => {
//     if (event.target.id === "moodSelection") {
//         const mood = 
//     }
// })

//SAVE BUTTON FUNCTION TO POST 
journalElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        //collect the input values into an object to post to the DB
        const date = document.querySelector("#journalDate").value
        const concepts = document.querySelector("#concepts").value
        const entry = document.querySelector("#journalEntries").value
        const mood = document.querySelector("#mood").value
        //we have not created a user yet - for now, we will hard code `1`.
        //we can add the current time as well
        const postObject = {
            date: date,
            concept: concepts,
            entry: entry,
            mood: mood
        }

        // be sure to import from the DataManager
        createEntry(postObject)
            .then(dataBase => {
                showEntry()
            })
    }
})


//functions for displaying to HTML
const showEntry = () => {
    const contentTarget = document.querySelector(".entryData")
    getEntries()
        .then((allEntries) => {
            contentTarget.innerHTML = EntryListComponent(allEntries)
            console.log(allEntries)
        })
}

const showPostEntry = () => {
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entries");
    entryElement.innerHTML = PostEntry();
}

const startJournal = () => {
    showEntry()
    showPostEntry()
}

startJournal();
