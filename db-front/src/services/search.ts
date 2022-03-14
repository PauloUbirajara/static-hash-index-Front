import axios from "axios"

export const searchForWordInDatabase = (word: string) => {
    const endpoint = `http://localhost:5000/search?wordToSearch=${word}`
    const promise = axios.get(endpoint)
    console.log(promise)
    return promise
}