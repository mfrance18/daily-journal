export const JournalEntryComponent = (entry) => {
    return `
      <section  class="entry">
          <article id="entry--${entry.id}">
            <p class="date__concept">${entry.date}</p>
            <p>Concepts: ${entry.concept}</p>
            <p>Notes: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
            <button class="editButton" id="edit--${entry.id}">Edit</button>
            <button class="deleteButton" id="delete--${entry.id}">Delete</button>
        </article>
      </section> `;
}