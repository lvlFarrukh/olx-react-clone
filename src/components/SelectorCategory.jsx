import React from 'react'
import { connect } from 'react-redux';
import { subFilter } from '../store/action'


class SelectorCategory extends React.Component {
    render() {
        return (
           
            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>{this.props.attr.type}</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="manufacture-list">

                    <div>
                        {this.props.attr.type === "Condition" && 
                            this.props.attr.options.map((v,i)=>{
                                return  <label key={i} className="cate-list-radio" style={{display: "block"}}>
                                            <input onClick={(e)=> {this.props.subFilter({type: "condition", action: ['condition', e.target.value]})}} type="radio" value={v} name="make" id=""/>
                                            <span>{v}</span>
                                        </label> 
                            })   
                        }
                       
                    </div>
                   
                </div> 

            </div>

        )
    }
}

// const mapStateToProps = (state) => ({ 
    // subFilters: state.adds.subFilters

// })

const mapDispatchToProps = (dispatch)=> ({
    subFilter: (obj)=> { dispatch(subFilter(obj)) },
})

export default connect(null, mapDispatchToProps)(SelectorCategory);
