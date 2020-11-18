import React, { Component } from 'react'
import { Link } from "react-router-dom";

class GridItemViewCart extends Component {
    render() {
        return(
            <div className="col-4 items-cart">
                <Link to={{
                            pathname: '/productview',
                            state: {
                                addDetail: this.props.attr
                            }
                        }}className="productLink">
                    <div className="cart-img">
                        <img src={this.props.attr.imagesURL[0]} alt="" />
                        <i className="fa fa-heart-o" aria-hidden="true" />
                    </div>
                    <div className="cart-detail">
                        <h3>Rs: {this.props.attr.price}</h3>
                        <p>{this.props.attr.title}</p>
                        <p className="l-gray">{this.props.attr.description.slice(0,55)}...</p>
                        <p className="l-gray fl">{this.props.attr.postDate[0]}-{this.props.attr.postDate[1]}-{this.props.attr.postDate[2]}</p>
                    </div>
                </Link>
            </div>
);
    }
}

export default GridItemViewCart
