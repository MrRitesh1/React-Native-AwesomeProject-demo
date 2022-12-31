import { INCREMENT, DECREMENT } from "../constants/indax"

export const Increment = (num, count) => {
    return async (dispatch) => {
        const data = await fetch('https://fakestoreapi.com/products/' + count)
            .then(res => res.json())
            .then(json => json)
        // console.log("DATA..", data)
        dispatch(setIncrement(num, data))
    }
}
export const setIncrement = (num, data) => {
    return {
        type: INCREMENT,
        payload: { num, data }
    }
}
export const Decrement = (num, count) => {
    return async (dispatch) => {
        const data = await fetch('https://fakestoreapi.com/products/' + count)
            .then(res => res.json())
            .then(json => json)
        // console.log(data, "DATA....")
        dispatch(setDecrement(num, data))
    }
}

export const setDecrement = (num, data) => {
    return {
        type: DECREMENT,
        payload: { num, data }
    }
}


