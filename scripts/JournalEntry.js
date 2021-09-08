export const JournalEntryComponent = (entry) => {
    return `
      <section  class="entry">
          <article id="entry--${entry.id}">
            <p class="date__concept">${entry.date}</p>
            <p>Concepts: ${entry.concept}</p>
            <p>Notes: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
            <div><button id="edit--${entry.id}">Edit</button></div>
        </article>
      </section> `;
}