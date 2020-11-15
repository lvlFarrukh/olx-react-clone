import React, { Component } from 'react'

class GridItemView extends Component {
    render() {
        return(
            <div className="col-4 items-cart">
                <div className="cart-img">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                    <i className="fa fa-heart-o" aria-hidden="true" />
                </div>
                <div className="cart-detail">
                    <h3>Rs 7,500,000</h3>
                    <p>2 Bids-2 Ba-1000 Square Feet</p>
                    <p className="l-gray">Double bed, kitchen, tv lounch falat for...</p>
                    <p className="l-gray fl">TODAY</p>
                </div>
            </div>
);
    }
}

export default GridItemView
