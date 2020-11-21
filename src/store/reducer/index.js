import reducer from './reducer'
import product from './product'
import chatapp from './chatapp'

import { combineReducers } from 'redux'

export default combineReducers({
    auth: reducer,
    adds: product,
    chat: chatapp
})