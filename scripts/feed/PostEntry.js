// import { dateFormat } from "../helperFunctions/helper.js"
const dateFormat = new Date().toLocaleDateString()

export const PostEntry = () => {

    return `  <div class="newPost">
                        <div>
                            <input value=""
                                id="concepts"
                                class="newPost__input"
                                type="text"
                                placeholder="Concepts" />
                         </div>
                
                    <textarea name="postDescription"
                        id="journalEntries"
                        class="newPost__input newPost__description"
                        placeholder="How was your day..."></textarea>

                        <div class="box">
                            <select id="mood">
                                <option value="" disabled selected hidden>Select Mood</option>
                                <option>Sad</option>
                                <option>Ok</option>
                                <option>Happy</option>
                            </select>
                        </div>
                        <div class="entryButtons">
                            <button class="saveButton" id="newPost__submit">Save</button>
                            <button id="cancel">Cancel</button>
                        </div>
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
                 </div>`
}
