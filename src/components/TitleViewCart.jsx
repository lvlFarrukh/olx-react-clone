import React from 'react'

import { Link } from "react-router-dom";
    
class TitleViewCart extends React.Component {
    render() {
        return(
            <div className="col-12 items-cart tv-cart">
                <Link to="/productview" className="productLink">
                    <div className="cart-img tv-cart-img">
                        <img height="50%" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        <i className="fa fa-heart-o d-gray" aria-hidden="true" />
                    </div>
                    <div className="cart-detail tv-cart-detail">
                        <h3 className="d-gray">Rs 7,500,000</h3>
                        <p className="d-gray">2 Bids-2 Ba-1000 Square Feet</p>
                        <p className="l-gray">Double bed, kitchen, tv lounch falat for...</p>
                        <p className="l-gray fl">TODAY</p>
                    </div>
                </Link>
            </div>   
        )
    }
}

export default TitleViewCart
