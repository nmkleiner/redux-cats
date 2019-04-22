import storageService from './storage.service';
// import utilService from './util.service';
import axios from 'axios'

export default {
    addCat,
    updateCat,
    deleteCat,
    getCatById,
    loadCats,
}
const key = 'cats';
const BASE_URL = 'http://localhost:3000';

async function addCat(addedCat) {
    return axios.post(`${BASE_URL}/cats`, {
        headers: {
            'Content-Type':'application/json',
        },
        addedCat
    })
}

async function updateCat(updatedCat) {
    return axios.put(`${BASE_URL}/cats`, {
        headers: {
            'Content-Type':'application/json',
        },
        updatedCat
    })
    // return Promise.resolve()
}

async function deleteCat(catId) {
    await axios.delete(`${BASE_URL}/cats/${catId}`)
    return Promise.resolve()

}

async function getCatById(catId) {
    const cat = await axios.get(`${BASE_URL}/cats/${catId}`)
    return Promise.resolve(cat.data)
}

async function loadCats() {
    const cats = await axios.get(`${BASE_URL}/cats`);
    return cats.data
}

