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

export const getSingleEntry = (entryId) => {
	return fetch(`http://localhost:8088/entries/${entryId}`)
	  .then(response => response.json())
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

export const deletePost = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
  }

  export const updatePost = postObj => {
	return fetch(`http://localhost:8088/entries/${postObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(postObj)
  
	})
		.then(response => response.json())
		
  }
