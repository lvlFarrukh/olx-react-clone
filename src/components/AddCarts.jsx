import React, { Component } from 'react'
import ItemCart from './ItemsCart'

class AddCarts extends Component {
    render(){
        return(
            <section>
                <div className="container-fluid new-add" style={{backgroundColor: 'white', marginTop: '10px'}}>
                        <div className="row">
                            <h1>Fresh recommendations</h1>
                        </div>
                    <div className="row" style={{marginLeft: '0px'}}>

                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                    
                    </div>
                    <div className="row load-more-btn">
                        <button>Load more</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddCarts
