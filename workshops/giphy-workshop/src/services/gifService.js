import axios from "axios"

const API_KEY = "mi5h9o7aVS8ATQ39X1K8z3SVt2oojuT5";

export async function searchGif(gifName) {
    const gif = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gifName}`)
        .then(response => response = response.data.data)
    return gif;
}

