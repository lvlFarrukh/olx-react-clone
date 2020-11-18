import React, { Component } from 'react'
import { Link } from "react-router-dom";


class SequenceViewCart extends Component {
    render() {
        return(
            <div className="row main-list-cart">
                
                    <div className="col-4 individual-cart setImg">
                   
                    <Link to={{
                            pathname: '/productview',
                            state: {
                                addDetail: this.props.attr
                            }
                        }}className="productLink">

                            <img height="200px" src={this.props.attr.imagesURL[0]} alt=""/>
                        </Link>
                    </div>
                    
                    <div className="col-8 individual-cart">
                        <div className="cart-detail">
                            <Link to={{
                                pathname: '/productview',
                                state: {
                                    addDetail: this.props.attr
                                }
                            }}className="productLink">
                                <i className="fa fa-heart-o iv-cart-icon" aria-hidden="true" />
                                <h3>Rs: {this.props.attr.price}</h3>
                                <p>{this.props.attr.title}</p>
                                <p className="l-gray">{this.props.attr.description}</p>
                                <p className="l-gray id-fl">{this.props.attr.postDate[0]}-{this.props.attr.postDate[1]}-{this.props.attr.postDate[2]}</p>
                            </Link>
                        </div>
                    </div>
                
            </div>
        );
    }
}

export default SequenceViewCart
