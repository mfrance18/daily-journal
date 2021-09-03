export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(entry => entry.json())
    .then(parsedEntry => {
        return parsedEntry
    })
}
