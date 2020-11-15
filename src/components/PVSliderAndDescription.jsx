import React from 'react'

class PVSliderAndDescription extends React.Component {

    // constructor(){
    //     super()
    // }

    render(){
        return(
              
            <div className="pv-img-slider">
                <div className="pv-img-slider-div">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvOhdqcoyY-ENmPfjdu9k-zlIwFmLwDBVGHw&usqp=CAU" alt=""/>
                    </div>

                    <div class="pv-img-slider-btn">
                        <span className="pv-btn-l">
                            <i class="fa fa-angle-left" aria-hidden="true"></i>
                        </span>
                        <span className="pv-btn-r">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <div className="pv-str-img">
                    <div className="row pv-img-all">
                        <div>
                            <img src={this.props.images} alt=""/>
                        </div>
                        <div>
                            <img src={this.props.images} alt=""/>
                        </div>
                        <div>
                            <img src={this.props.images} alt=""/>
                        </div>
                        <div>
                            <img src={this.props.images} alt=""/>
                        </div>
                    </div>
                </div>

                <div  className="pv-str-descrip">
                    <div className="pv-str-h">
                        <h3>Description</h3>
                    </div>
                    <div className="pv-str-p">
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                        <p>asdsad asdas asdasdad</p>
                    </div>

                </div>
            </div>

        )
    }
}

export default PVSliderAndDescription
