import React from 'react'

class PvContact extends React.Component {
   
    render() {
        // console.log(this.props.uid)
        return(

            <div className="pv-sellerDesp">
                <div className="pv-sd-h">
                    <h5>Seller description</h5>
                </div>

                <div className="row">
                    <div className="pv-sd-logo">
                        <img src={this.props.images} alt=""/>
                    </div>
                    <div className="pv-sd-name">
                        <span className="pv-sd-n1">Fine Tech.pk</span>
                        <span className="pv-sd-n2">Member since Aug 2019</span>
                    </div>
                    <div className="pv-sd-icon">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="pv-sd-btn">
                    <button>Chat With seller</button>
                </div>

                <div>
                    <div className="row pv-sd-div">
                        <div className="pv-sd-ficon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="pv-sd-num">
                            <span>** *** ****</span>
                        </div>
                        <div className="pv-sd-sn">
                            <span>Show number</span>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default PvContact
