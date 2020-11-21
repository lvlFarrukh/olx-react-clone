import React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";

// Import Pages
import Home from '../pages/Home'
import ItemView from '../pages/ItemView'
import ProductView from '../pages/ProductView'
import AddPost from '../pages/AddProduct'
import ChatApp from '../pages/ChatApp';

class AppRouters extends React.Component {
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/items" component={ItemView} />
                <Route path="/productview" component={ProductView} />
                <Route path="/post" component={AddPost} />
                <Route path="/post" component={AddPost} />
                <Route path="/chat" component={ChatApp} />
            </Router>

        )
    }
}

export default AppRouters
