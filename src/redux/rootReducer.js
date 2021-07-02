import { combineReducers } from "redux";

import hotelReducer from "./Hotel/hotel-reducer";

const rootReducer = combineReducers({
    hotel : hotelReducer
})

export default rootReducer