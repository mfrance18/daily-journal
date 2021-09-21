export const PostEdit = (postObj) => {
    return `  <div class="newPost">
                <h3>Edit This Entry</h3>
                <input value="${postObj.date}" id="date" class="newPost" class="newPost__input" >
                    <div>
                        <input value="${postObj.concept}"
                            id="concepts"
                            class="newPost__input"
                            type="text"
                            placeholder="Concepts" />
                    </div>

                <textarea name="postDescription"
                    id="journalEntries"
                    class="newPost__input newPost__description"
                    placeholder="How was your day...">${postObj.entry}</textarea>

                    <div class="box">
                        <select id="mood">
                            <option value="${postObj.mood}" disabled selected hidden>${postObj.mood}</option>
                            <option>Sad</option>
                            <option>Ok</option>
                            <option>Happy</option>
                        </select>
                    </div>
                    <div class="entryButtons">
                        <button class="saveButton" id="updatePost--${postObj.id}">Update</button>
                        <button class="saveButton" id="cancel">Cancel</button>
                    </div>
                </div>`
}