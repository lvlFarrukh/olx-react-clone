import reducer from './reducer'
import product from './product'

import { combineReducers } from 'redux'

export default combineReducers({
    auth: reducer,
    adds: product
})