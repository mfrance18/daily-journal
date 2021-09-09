import { dateFormat } from "../helperFunctions/helper.js"

export const PostEntry = () => {
    return `
    <form id="entryForm">
    <fieldset class="fieldSet">
        <label for="journalDate"> Date of entry: ${dateFormat()}</label>
    </fieldset>
    <fieldset class="fieldSet">
        <label for="">Concepts covered</label>
        <input id="concepts" type="text">
    </fieldset class="fieldSet">
    <fieldset class="fieldSet">
        <label>Journal Entry</label>
        <textarea id="journalEntries"></textarea>
    </fieldset>
    <fieldset class="fieldSet">
        <label>Mood for the Day</label>
        <select id="mood">
            <option value="" disabled selected hidden>Select Mood</option>
            <option>Sad</option>
            <option>Ok</option>
            <option>Happy</option>
        </select>
    </fieldset>
</form>
<div><button class="saveButton" id="newPost__submit">Save</button></div>
    `
}

export const SortEntry = () => {
    return `
    <section class="sortMood">
    <h2>Sort by Mood</h2>
        <select id="moodSelection">
            <option value="" disabled selected hidden>Select Mood</option>
            <option>Sad</option>
            <option>Ok</option>
            <option>Happy</option>
        </select>
        <button class="showAllButton"id="showAll">Show All</button>
        </section>
        
        `
}