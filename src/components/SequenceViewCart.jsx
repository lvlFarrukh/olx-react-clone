import React, { Component } from 'react'

class SequenceView extends Component {
    render() {
        return(
            <div className="row main-list-cart">
                <Link to="/productview" className="productLink">
                    <div className="col-4 individual-cart">
                        <img width="100%" height="100%" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>

                    </div>

                    <div className="col-8 individual-cart">
                        <div className="cart-detail">
                            <i className="fa fa-heart-o iv-cart-icon" aria-hidden="true" />
                            <h3>Rs 7,500,000</h3>
                            <p>2 Bids-2 Ba-1000 Square Feet</p>
                            <p className="l-gray">Double bed, kitchen, tv lounch falat for...</p>
                            <p className="l-gray id-fl">TODAY</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default SequenceView
