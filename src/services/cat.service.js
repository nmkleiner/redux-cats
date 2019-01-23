import storageService from './storage.service';
// import utilService from './util.service';

export default {
    addCat,
    updateCat,
    deleteCat,
    getCatById,
    loadCats,
}
const key = 'cats'



async function addCat(addedCat) {
    const cats = await storageService.load(key)
    cats.push(addedCat)
    await storageService.store(key,cats)
    return Promise.resolve()
}

async function updateCat(updatedCat) {
    let cats = await storageService.load(key)
    const idx = cats.findIndex((cat) => cat.id === updatedCat.id)
    cats.splice(idx,1,updatedCat)
    await storageService.store(key,cats)
    return Promise.resolve()
}

async function deleteCat(catId) {
    const cats = await storageService.load(key)
    const idx = cats.findIndex((cat) => cat.id === catId)
    cats.splice(idx,1)
    storageService.store(key,cats)
    return Promise.resolve()
}

async function getCatById(catId) {
    const cats = await storageService.load(key)
    const idx = cats.findIndex((cat) => cat.id === catId)
    return Promise.resolve(cats[idx])
}

async function loadCats() {
    let cats = await storageService.load(key)
    if (!cats) {
        cats = [
            {
                id: '1',
                name: 'Jimmy',
                gender: 'male',
                age: 3,
                rank: 783,
                pic: '/img/jimmy.jpg',
                clickedInc: false,
                clickedDec: false,
            },
            {
                id: '2',
                name: 'Lichy',
                gender: 'female',
                age: 8,
                rank: 1032,
                pic: '/img/lichy.jpg',
                clickedInc: false,
                clickedDec: false,
            },
            {
                id: '3',
                name: 'Mizi',
                gender: 'female',
                age: 1,
                rank: 20568,
                pic: '/img/mizi.jpg',
                clickedInc: false,
                clickedDec: false,
            },
            {
                id: '4',
                name: 'Whiskers',
                gender: 'female',
                age: 6,
                rank: 511,
                pic: '/img/whiskers.jpg',
                clickedInc: false,
                clickedDec: false,
            },
            {
                id: '5',
                name: 'Leonard',
                gender: 'male',
                age: 3,
                rank: 679,
                pic: '/img/leonard.jpg',
                clickedInc: false,
                clickedDec: false,
            },
            {
                id: '6',
                name: 'Bianca',
                gender: 'female',
                age: 4,
                rank: 854,
                pic: '/img/bianca.jpg',
                clickedInc: false,
                clickedDec: false,
            },
        ]
        storageService.store(key,cats)
    }
    return cats
}

