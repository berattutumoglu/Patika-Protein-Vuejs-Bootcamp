import axios from "axios";
const API_KEY = "mi5h9o7aVS8ATQ39X1K8z3SVt2oojuT5";

export const httpService = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
    params: {
        "api_key": "mi5h9o7aVS8ATQ39X1K8z3SVt2oojuT5"
    }
})