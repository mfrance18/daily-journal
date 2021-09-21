import { EntryListComponent } from "./feed/JournalEntryList.js";
import { getEntries, useEntryCollection, createEntry, deletePost, getSingleEntry, updatePost } from "./data/DataManager.js"
import { PostEntry } from "./feed/PostEntry.js";
import { PostEdit } from "./feed/PostEdit.js";


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
    const entryElement = document.querySelector(".entries");
    entryElement.innerHTML = PostEntry();
}

const showEdit = (postObj) => {
    const entryElement = document.querySelector(".entries");
    entryElement.innerHTML = PostEdit(postObj);
}


//click event listeners
journalElement.addEventListener("click", event => {
   if (event.target.id.startsWith("edit")) {  //this controls the edit button
    const postId = event.target.id.split("--")[1];
    getSingleEntry(postId)
        .then(response => {
            showEdit(response);
        })
    } else if (event.target.id.startsWith("delete")) { //this controls the delete button
        const postId = event.target.id.split("--")[1];
        deletePost(postId)
          .then(response => {
            showEntry();
          })
    } else if (event.target.id === "showAll"){  //this button displays all posts
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
        const date = document.querySelector("#date").value
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
        console.log("postObject")
        createEntry(postObject)
            .then(dataBase => {
                showEntry()
                showPostEntry()
            })
    } 
})

//UPDATE BUTTON CLICK EVENT LISTENER
journalElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("updatePost")) {
        const postId = event.target.id.split("--")[1];
        //collect all the details into an object
        const date = document.querySelector("#date").value
        const concepts = document.querySelector("#concepts").value
        const entry = document.querySelector("#journalEntries").value
        const mood = document.querySelector("#mood").value

        const postObject = {
            date: date,
            concept: concepts,
            entry: entry,
            mood: mood,
            id: parseInt(postId)
        }
        console.log(date, "date")
        updatePost(postObject)
            .then(response => {
                showEntry();
                showPostEntry()
            })
    }
})

//CANCEL BUTTON TO CLEAR FORM EVENT LISTENER
journalElement.addEventListener("click", event => {
    if (event.target.id === "cancel") {
        showPostEntry()
    }
})

//functions for displaying to HTML

const startJournal = () => {
    showEntry()
    showPostEntry()
}

startJournal();
