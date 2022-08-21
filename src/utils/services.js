import axios from "axios";

const URL = endpoint => `https://users-crud1.herokuapp.com/${endpoint}`

export const get = endpoint => new Promise((resolve, reject) => {
    axios.get(URL(endpoint))
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const post = (endpoint, data) => new Promise((resolve, reject) => {
    axios.post(URL(endpoint), data)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const remove = endpoint => new Promise((resolve, reject) => {
    axios.delete(URL(endpoint))
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const patch = (endpoint, data) => new Promise((resolve, reject) => {
    axios.patch(URL(endpoint), data)
    .then(res => resolve(res))
    .catch(err => reject(err))
})