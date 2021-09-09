export const dateFormat = () => {
    var todaysDate = new Date(); todaysDate = todaysDate.toLocaleDateString();
    return todaysDate;
}
//this function resets the form fields
export const resetForm = () => {
    document.getElementById("entryForm").reset()
}