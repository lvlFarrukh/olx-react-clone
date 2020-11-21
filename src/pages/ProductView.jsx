import React from 'react'

import LOGO from '../media/olx_logo.png'


// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Adds from '../components/Adds'
import PVSliderAndDescription from '../components/PVSliderAndDescription'
import PvRate from '../components/PvRate'
import PvContact from '../components/PvContact'


class ProductView extends React.Component{
    render() {
        return(
            <div>
                
                <Header />

                <Adds />

                <section>
                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-8">
                              
                              <PVSliderAndDescription description={this.props.location.state.addDetail.description.split(". ")} images={this.props.location.state.addDetail.imagesURL}/>

                            </div>

                            <div className="col-4">

                                <PvRate title={this.props.location.state.addDetail.title}
                                        price={this.props.location.state.addDetail.price}
                                        date={this.props.location.state.addDetail.postDate.join("-")} 
                                        location={`${this.props.location.state.addDetail.state}, ${this.props.location.state.addDetail.City}`}
                                />
                                
                                <PvContact uid={this.props.location.state.addDetail.uid} images={LOGO}/>

                            </div>

                        </div>
                    </div>

                </section>

                

                <Footer />

            </div>
        )
    }
}

export default ProductView
