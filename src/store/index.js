import store from './reducer/index';
// import product from './reducer/product';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


export default createStore(
    store,
    applyMiddleware(thunk)
);