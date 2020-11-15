import React from 'react'

class InputPriceAndArea extends React.Component {
    render() {
        return(

            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>Price or Area</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>

                <div className="cate-form-VI">
                    <form>
                        <div className="row ">
                            <div className="form-div-VI">
                                <input type="number" placeholder="Min"/>
                            </div>

                            <div className="form-div-VI">
                                <input type="number" placeholder="Max"/>
                            </div>

                            <div className="form-div-btn-VI">
                                <button>
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

export default InputPriceAndArea
