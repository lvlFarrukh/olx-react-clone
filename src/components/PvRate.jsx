import React from 'react'

class PvRate extends React.Component {
    render(){
        return(
            
            <div className="pv-rate">
                <div className="row">
                    <div className="pv-rate-val">
                        <h4>
                            Rs: {this.props.price}
                        </h4>
                    </div>

                    <div className="pv-rate-icons">
                        <span>
                            <i className="fa fa-share" aria-hidden="true"></i>
                        </span>
                        <span>
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <div className="pv-rate-des">
                    <p>{this.props.title}</p>
                </div>

                <div className="row pv-rate-loc">
                    <div>
                        <span>{this.props.location}</span>
                    </div>
                    <div className="pv-rate-loc-time">
                    <span>{this.props.date}</span>
                    </div>

                </div>
                                    
            </div>

        )
    }
}

export default PvRate
