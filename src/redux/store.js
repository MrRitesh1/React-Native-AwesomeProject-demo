import { createStore, applyMiddleware, } from 'redux';
import ReduxThunk from 'redux-thunk';
// import rootReducer from "./reducers/index";
import rootReducer from "./reducers/updown";
import { persistReducer, persistStore } from 'redux-persist'
// const configPersist = {
//     key: 'persist-store',
//     storage
// }
// const persistReducer = persistReducer(configPersist, rootReducer)
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export const persist = persistStore(store)
export default store