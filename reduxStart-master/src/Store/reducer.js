const initialState = {
    compteur : 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENTE') {
        return {
            compteur : state.compteur + 1
        }
    }
    if (action.type === 'DECREMENTE') {
        return {
            compteur : state.compteur - 1
        }
    }

    return state
}

export default reducer