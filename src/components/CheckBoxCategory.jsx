import React from 'react'
import { connect } from 'react-redux';
import { subFilter } from '../store/action'

class CheckBoxCategory extends React.Component {
    constructor(){
        super();
        this.state = {
            companyList: {
                Vehicle: ['Honda', 'Corolla', 'City', 'Other'],
                Bike: ['Honda', 'Super power', 'Unique', 'Super star', 'Other'],
                Mobile: ['Apple', 'Huawie', 'Samsung', 'Other'],
            },
            catagory: ['loading...'],
            selectCatagory: "",
            chng: 0
        }
    }

    static getDerivedPropsFromState(props, state) {
        return {
            selectCatagory: console.log(props.attr)
        }
    }

    render() {
        // console.log(this.props)
        
        return(
            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>{this.props.attr.type}</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="manufacture-list">

                    {this.state.catagory.map((v,i)=>{
                        return <div key={i}>
                                    <label onClick={(e)=> {this.props.subFilter({type: "company", action: ['company', e.target.value]})}} className="cate-list-checkbox">
                                        <input type="checkbox" value={v} name="make" id=""/>
                                        <span>{v}</span>
                                    </label>
                                </div>
                    })}

                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=> ({
    subFilter: (obj)=> { dispatch(subFilter(obj)) },
})

export default connect(null, mapDispatchToProps)(CheckBoxCategory);


