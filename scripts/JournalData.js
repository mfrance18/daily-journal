
const journal = [
    {
        id: 1,
        date: "08/12/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "08/19/2021",
        concept: "Group Project",
        entry: "We presented our 1st group project.",
        mood: "Great!"
    },
    {
        id: 3,
        date: "08/30/2021",
        concept: "Javascript",
        entry: "We discussed arrays and functions.",
        mood: "Ok"
    }
]

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

