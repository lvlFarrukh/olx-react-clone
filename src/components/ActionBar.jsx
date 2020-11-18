import React from 'react'
import { connect } from 'react-redux';
import {changeItemsView} from '../store/action'

class ActionBar extends React.Component {
    render() {
        // console.log(this.props)
        const color1 = {color: 'darkcyan'};
        const color2 = {color: 'black'};
        return(
            <div className="action-bar">
                <div className="ab-h">
                    <h6>VIEW</h6>
                </div>

                <div className="ab-div-icon">
                    <div className="ab-icon">
                        <i onClick={()=>{this.props.changeItemsView(0)}} style={this.props.productView === 0 ? color1: color2} className="fa fa-bars" aria-hidden="true"></i>
                    </div>

                    <div className="ab-icon">
                        <i onClick={()=>{this.props.changeItemsView(1)}} style={this.props.productView === 1 ? color1: color2} className="fa fa-th-large" aria-hidden="true"></i>
                    </div>

                    <div className="ab-icon">
                        <i onClick={()=>{this.props.changeItemsView(2)}} style={this.props.productView === 2 ? color1: color2} className="fa fa-television" aria-hidden="true"></i>
                    </div>

                    <div className="ab-dd">
                        <hr/>
                        <h6>SORT BY &nbsp;:</h6>
                        
                        <select disabled>
                            <option value="temp" >Newly List</option>
                            <option value="temp" >Most Relevant</option>
                            <option value="temp" >Lowest Prize</option>
                            <option value="temp" >Highest Prize</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({ 
    productView: state.adds.productView,
})
    
const mapDispatchToProps = (dispatch)=> ({
    changeItemsView: (val)=> {dispatch(changeItemsView(val))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
