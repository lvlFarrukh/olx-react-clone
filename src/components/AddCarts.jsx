import React, { Component } from 'react'
import ItemCart from './ItemsCart'

import { connect } from 'react-redux'

class AddCarts extends Component {
    render(){
        return(
            <section>
                <div className="container-fluid new-add" style={{backgroundColor: 'white', marginTop: '10px'}}>
                        <div className="row">
                            <h1>Fresh recommendations</h1>
                        </div>
                    <div className="row" style={{marginLeft: '0px'}}>

                        {/* <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart />
                        <ItemCart /> */}

                        {this.props.product.map((v,i)=>{
                            return <ItemCart key={v.key} attr={v}/>
                        })}
                    
                    </div>
                    <div className="row load-more-btn">
                        <button>Load more</button>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({ 
    product: state.adds.allProduct, 
})
    
const mapDispatchToProps = (dispatch)=> ({
    // addsForSlider: (data)=> {dispatch(addsForSlider(data))},
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCarts);
