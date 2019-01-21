import catService from '../../services/cat.service';

export const loadCatsAsync = cats => ({ type: 'LOAD_CATS', cats })

export const loadCats = () => {
    return async (dispatch) => {
        const cats = await catService.loadCats()
        dispatch(loadCatsAsync(cats))
    }
}

export const addCatAsync = addedCat => ({ type: 'ADD_CAT', addedCat })

export const addCat = (addedCat) => {
    return async (dispatch) => {
        await catService.addCat(addedCat)
        dispatch(addCatAsync(addedCat))
    }
}

export const deleteCatAsync = deletedCatId => ({ type: 'DELETE_CAT', deletedCatId })

export const deleteCat = (deletedCatId) => {
    return async (dispatch) => {
        await catService.deleteCat(deletedCatId)
        dispatch(deleteCatAsync(deletedCatId))
    }
}

export const updateCatAsync = updatedCat => ({ type: 'UPDATE_CAT', updatedCat })

export const updateCat = (updatedCat) => {
    return async (dispatch) => {
        await catService.updateCat(updatedCat)
        dispatch(updateCatAsync(updatedCat))
    }
}

export const incrementRankAsync = id => ({ type: 'INCREMENT_RANK', id })

export const incrementRank = (id) => {
    return async (dispatch) => {
        const updatedCat = await catService.getCatById(id)
        updatedCat.rank++
        updatedCat.clickedInc = (!updatedCat.clickedDec)? true : false;
        updatedCat.clickedDec = false
        console.log(updatedCat)
        await catService.updateCat(updatedCat)
        dispatch(updateCatAsync(updatedCat))
        dispatch(incrementRankAsync(id))
    }
}

export const decrementRankAsync = id => ({ type: 'DECREMENT_RANK', id })

export const decrementRank = (id) => {
    return async (dispatch) => {
        const updatedCat = await catService.getCatById(id)
        updatedCat.rank--
        updatedCat.clickedDec = (!updatedCat.clickedInc) ? true : false
        updatedCat.clickedInc = false
        console.log(updatedCat)
        await catService.updateCat(updatedCat)
        dispatch(updateCatAsync(updatedCat))
        dispatch(decrementRankAsync(id))
    }
}


export const selectCat = (id) => {
    return { type: 'SELECT_CAT', id }
}
// export const decrementRank = (id) => {
//     return { type: 'DECREMENT_RANK', id }

// }




