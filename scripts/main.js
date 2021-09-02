import { EntryListComponent } from "./JournalEntryList.js";
import { getEntries} from "./DataManager.js"

EntryListComponent()

getEntries()
.then(data => {
    console.log("User Data", data)
})
