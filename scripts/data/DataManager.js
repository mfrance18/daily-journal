let entryCollection = []

export const useEntryCollection = () => {
    return [...entryCollection]
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(entry => entry.json())
    .then(parsedEntry => {
        entryCollection = parsedEntry
        return parsedEntry
    })
}

export const createEntry = postObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(response => response.json())
}

export const deletePost = postId => {
    return fetch(`http://localhost:8088/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getEntries)
  }