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
        console.log(this.props)
        return(
            <div>
                
                <Header />

                <Adds />

                <section>
                    <div className="container-fluid">

                        <div className="row">

                            <div className="col-8">
                              
                              <PVSliderAndDescription images={LOGO}/>

                            </div>

                            <div className="col-4">

                                <PvRate/>
                                <PvContact images={LOGO}/>

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
