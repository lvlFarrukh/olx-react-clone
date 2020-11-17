import React, { Component } from 'react'

import { Link } from "react-router-dom";


class ItemsCart extends Component {
    render() {
        // console.log(this.props)
        return(
            <div className="col-3 items-cart">

                <Link to={{
                            pathname: '/productview',
                            state: {
                                addDetail: this.props.attr
                            }
                        }}className="productLink">

                    <div className="cart-img">
                        <img src={this.props.attr.imagesURL[0]} alt="" />
                        <i className="fa fa-heart-o d-gray" aria-hidden="true" />
                    </div>
                    <div className="cart-detail">
                        <h3 className="d-gray">Rs: {this.props.attr.price}</h3>
                        <p className="d-gray">{this.props.attr.description.split('. ')[0]}</p>
                        <p className="l-gray">{this.props.attr.description.split('. ')[1]}...</p>
                        <p className="l-gray fl">{this.props.attr.postDate[0]}-{this.props.attr.postDate[1]}-{this.props.attr.postDate[2]}</p>
                    </div>
                </Link>
            </div>
);
    }
}

export default ItemsCart
