import { getJournalEntries } from "./JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";


export const EntryListComponent = () => {
    const contentElement = document.querySelector(".entryData")
    const entries = getJournalEntries()
    
    let journalHTMLRepresentation = ""
    

    for (const entry of entries) {
        journalHTMLRepresentation += JournalEntryComponent(entry)
    }
    contentElement.innerHTML += journalHTMLRepresentation
}