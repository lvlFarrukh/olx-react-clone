import React from 'react'

class PvRate extends React.Component {
    render(){
        return(
            
            <div className="pv-rate">
                <div className="row">
                    <div className="pv-rate-val">
                        <h4>
                            Rs 1,300
                        </h4>
                    </div>

                    <div className="pv-rate-icons">
                        <span>
                            <i class="fa fa-share" aria-hidden="true"></i>
                        </span>
                        <span>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <div className="pv-rate-des">
                    <p>Double Price label machine, gun</p>
                </div>

                <div className="row pv-rate-loc">
                    <div>
                        <span>Sabzazar, Lahore, Punjab</span>
                    </div>
                    <div className="pv-rate-loc-time">
                        <span>Today</span>
                    </div>

                </div>
                                    
            </div>

        )
    }
}

export default PvRate
