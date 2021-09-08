import { EntryListComponent } from "./JournalEntryList.js";
import {getEntries} from "./DataManager.js"

const button = document.querySelector("main")

button.addEventListener("click", event => {
    if (event.target.id === "recordButton") {
        console.log("Record Entry")
    } else if (event.target.id.startsWith("edit")) {
        alert("Edit button clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])
    }
})



const showEntry = () => {
    const contentTarget = document.querySelector(".entryData")
    getEntries()
    .then((allEntries) => {
        contentTarget.innerHTML += EntryListComponent(allEntries)
        console.log(allEntries)
    })
}


const startJournal = () => {
showEntry()
}

startJournal();
