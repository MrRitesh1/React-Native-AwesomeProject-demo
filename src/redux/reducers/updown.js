import { INCREMENT, DECREMENT } from "../constants/indax"
const initialState = [0, '']
const changeCount = (state = initialState, action) => {
    // console.log("action", action)
    switch (action.type) {
        case INCREMENT:
            return [state[0] + action.payload['num'], action.payload['data'].title];
        case DECREMENT:
            return [state[0] - action.payload['num'], action.payload['data'].title];
        default:
            return state;
    }
}
export default changeCount
