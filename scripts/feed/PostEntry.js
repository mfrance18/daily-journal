export const PostEntry = () => {
    return `
    <form>
    <fieldset class="fieldSet">
        <label for="journalDate"> Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">
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
            <option>Sad</option>
            <option>Ok</option>
            <option>Happy</option>
        </select>
    </fieldset>
</form>
<button class="saveButton" id="newPost__submit">Save</button>
    `
}