import React, { Component } from 'react'
import ItemsCart from './ItemsCart'

import { connect } from 'react-redux'
// import { addsForSlider } from '../store/action'


class Slider extends Component {
    constructor() {
        super();
        this.state = {
            temparr: [1,2,4],
            limit: 0,
            currentState: 0,
            slider: []
        }
    }

    // componentDidMount() {
    //     console.log(this.props)
    // }

    // componentWillUpdate() {
    //     this.setState({
    //         limit: this.props.SliderAdds.length
    //     })
    // }

    // static getDerivedStateFromProps(props, state){
    //     console.log(props)
    //     return {
    //         limit: props.SliderAdds.length,
    //         slider: props.SliderAdds[0]
    //     }
    // }

    render(){
        // console.log(this.state.slider)
        
        return(
            // New or best recommended slider 
            <section>
                <div className="container-fluid new-add" style={{height: '340px'}}>
                    <div className="row">
                        <h1>More on Apartment and Flats</h1>
                        <h6 className="vm">View more</h6>
                    </div>
                    <div className="row" style={{marginLeft: '0px'}}>
                    
                            
                        {this.state.slider.map((v)=>{
                            return <ItemsCart key={v.key}/>
                        })}


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
    product: state.adds.allProduct, 
    SliderAdds: state.adds.sliderAdds, 
})
    
const mapDispatchToProps = (dispatch)=> ({
    // addsForSlider: (data)=> {dispatch(addsForSlider(data))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Slider);