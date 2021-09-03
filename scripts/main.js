import { EntryListComponent } from "./JournalEntryList.js";
import {getEntries} from "./DataManager.js"

const button = document.querySelector("main")

button.addEventListener("click", event => {
    if (event.target.id === "recordButton") {
        console.log("Record Entry")
    }
})



const showEntry = () => {
    const contentTarget = document.querySelector(".entryData")
    getEntries()
    .then((allEntries) => {
        contentTarget.innerHTML += EntryListComponent(allEntries)
    })
}


const startJournal = () => {
showEntry()
}

startJournal();
