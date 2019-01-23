


const initialState = {
    cats: [{ name: 'baba', id: 1 }, { name: 'mama', id: 2 }],
    selectedCat: {}
}

const catReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CATS':
            return {
                ...state,
                cats: [...action.cats]
            }
        case 'INCREMENT_RANK':
            return {
                ...state,
                cats: state.cats.map((cat) => {
                    if (cat.id === action.id) return {
                        ...cat,
                        clickedInc: (!cat.clickedDec) ? true : false,
                        clickedDec: false
                    }
                    else return cat
                })
            }
        case 'DECREMENT_RANK':
            return {
                ...state,
                cats: state.cats.map((cat) => {
                    if (cat.id === action.id) return {
                        ...cat,
                        clickedDec: (!cat.clickedInc) ? true : false,
                        clickedInc: false
                    }
                    else return cat
                })
            }
        case 'SELECT_CAT':
            return {
                ...state,
                selectedCat: state.cats.find((cat) => cat.id === action.id)
            }
        case 'UPDATE_CAT':
            return {
                ...state,
                cats: state.cats.map((cat) => {
                    if (cat.id === action.updatedCat.id) return {
                        ...action.updatedCat
                    }
                    else return cat
                })
            }
        case 'ADD_CAT':
            return {
                ...state,
                cats: [
                    ...state.cats,
                    action.addedCat
                ]

            }
        case 'DELETE_CAT':
            return {
                ...state,
                cats: state.cats
                    .filter((cat) => cat.id !== action.deletedCatId)
            }
        default:
            return state
    }
}

export default catReducer