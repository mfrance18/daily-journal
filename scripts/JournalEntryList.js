// import { getJournalEntries } from "./JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";

export const EntryListComponent = (allEntries) => {
    let content = ""
    for (const post of allEntries ) {
    content += JournalEntryComponent(post)
    }
    
    return content
}