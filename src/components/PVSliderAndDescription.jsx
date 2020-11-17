import React from 'react'

class PVSliderAndDescription extends React.Component {

    constructor(){
        super();
        this.state = {
            img: 0
        }
    }

    render(){
        const nextImg = ()=> {
            this.setState({
                img: this.state.img < this.props.images.length - 1 ? this.state.img + 1 : 0
            })
        }

        const previousImg = ()=> {
            this.setState({
                img: this.state.img === 0 ? this.props.images.length -1 : this.state.img - 1
            })
        }
        return(
              
            <div className="pv-img-slider">
                <div className="pv-img-slider-div">
                    <div>
                        <img src={this.props.images[this.state.img]} alt=""/>
                    </div>

                    <div className="pv-img-slider-btn">
                        <span className="pv-btn-l" onClick={()=> { previousImg() }}>
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </span>
                        <span className="pv-btn-r" onClick={()=> {nextImg()}}>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <div className="pv-str-img">
                    <div className="row pv-img-all">
                        
                        {this.props.images.map((v,i)=>{
                            return <div key={i}>
                                    <img src={v} alt=""/>
                                </div>
                        })}
                       
                    </div>
                </div>

                <div  className="pv-str-descrip">
                    <div className="pv-str-h">
                        <h3>Description</h3>
                    </div>
                    <div className="pv-str-p">
                        {this.props.description.map((v, i)=>{
                            return <p key={i}>{v}.</p>
                        })}
                    </div>

                </div>
            </div>

        )
    }
}

export default PVSliderAndDescription
