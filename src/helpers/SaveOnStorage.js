export const SaveOnStorage = (key, element) => {
    let items = JSON.parse(localStorage.getItem(key))

    if (Array.isArray(items)) {
        items.push(element)
    } else {
        items = [element]
    }

    localStorage.setItem(key, JSON.stringify(items))
}