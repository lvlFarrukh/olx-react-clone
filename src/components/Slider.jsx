import React, { Component } from 'react'
import ItemsCart from './ItemsCart'

import { connect } from 'react-redux'
import { getAllAdds } from '../store/action'


class Slider extends Component {
    render(){
        this.props.getAllAdds()
        // console.log("Adds==> ", this.props.adds)
        return(
            // New or best recommended slider 
            <section>
                <div className="container-fluid new-add" style={{height: '340px'}}>
                    <div className="row">
                        <h1>More on Apartment and Flats</h1>
                        <h6 className="vm">View more</h6>
                    </div>
                    <div className="row" style={{marginLeft: '0px'}}>
                        
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        
                    
                    </div>

                    <div className="row navi-btn">
                        <div className="l-btn">
                            <i className="fa fa-angle-left" aria-hidden="true" />
                        </div>
                        <div className="r-btn">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                {/* <button onClick={()=>{console.log(this.props)}}>Check data</button> */}
            </section>

        )
    }
}

const mapStateToProps = (state) => ({ 
    adds: state.adds.allProduct 
})
    
const mapDispatchToProps = (dispatch)=> ({
    getAllAdds: ()=> { dispatch(getAllAdds() )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider);