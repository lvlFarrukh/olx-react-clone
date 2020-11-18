import React from 'react'

import { Link } from "react-router-dom";
    
class TitleViewCart extends React.Component {
    render() {
        return(
            <div className="col-12 items-cart tv-cart">
                <Link to={{
                            pathname: '/productview',
                            state: {
                                addDetail: this.props.attr
                            }
                        }}className="productLink">

                    <div className="cart-img tv-cart-img">
                        <img height="50%" src={this.props.attr.imagesURL[0]} alt="" />
                        <i className="fa fa-heart-o d-gray" aria-hidden="true" />
                    </div>
                    <div className="cart-detail tv-cart-detail">
                        <h3 className="d-gray">Rs: {this.props.attr.price}</h3>
                        <p className="d-gray">{this.props.attr.title}</p>
                        <p className="l-gray">{this.props.attr.description.slice(0,80)}...</p>
                        <p className="l-gray fl">{this.props.attr.postDate[0]}-{this.props.attr.postDate[1]}-{this.props.attr.postDate[2]}</p>
                    </div>
                </Link>
            </div>   
        )
    }
}

export default TitleViewCart
