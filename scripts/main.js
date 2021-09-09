import { EntryListComponent } from "./feed/JournalEntryList.js";
import { getEntries, useEntryCollection, createEntry, deletePost } from "./data/DataManager.js"
import { PostEntry, SortEntry } from "./feed/PostEntry.js";
import { resetForm } from "./helperFunctions/helper.js";

const journalElement = document.querySelector("main")

//FUNCTIONS TO DISPLAY TO DOM
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

const showSortedEntries = () => {
    const sortElement = document.querySelector(".sortEntries")
    sortElement.innerHTML = SortEntry();
}



journalElement.addEventListener("click", event => {
   if (event.target.id.startsWith("edit")) {  //this controls the edit button
        alert("Edit button clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])

    } else if (event.target.id.startsWith("delete")) { //this controls the delete button
        const postId = event.target.id.split("__")[1];
        deletePost(postId)
          .then(response => {
            showEntry();
          })
    } else if (event.target.id === "showAll"){  //this button displays all posts
        console.log("show all button was clicked")
        showEntry()
    }
})


//FILTER BY MOOD
const showFilteredEntries = (moodStr) => { //moodStr is passing the string from the mood object in the JSON
    const filteredData = useEntryCollection().filter(singleEntry => { //filtering through the posts that are on the dom
        if (singleEntry.mood === moodStr) {
            return singleEntry
        } 
    })
    const entryElement = document.querySelector(".entryData");
    entryElement.innerHTML = EntryListComponent(filteredData);
}

journalElement.addEventListener("change", event => {
    if (event.target.id === "moodSelection") {
        showFilteredEntries(event.target.value) 
    } 
})


//SAVE BUTTON FUNCTION TO POST 
journalElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        //collect the input values into an object to post to the DB
        const date = new Date().toLocaleDateString()
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
            .then(resetForm())
    }
})

//functions for displaying to HTML

const startJournal = () => {
    showEntry()
    showPostEntry()
    showSortedEntries()
}

startJournal();
