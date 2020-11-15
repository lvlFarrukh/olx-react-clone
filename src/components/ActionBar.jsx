import React from 'react'

class ActionBar extends React.Component {
    render() {
        return(
            <div className="action-bar">
                <div className="ab-h">
                    <h6>VIEW</h6>
                </div>

                <div className="ab-div-icon">
                    <div className="ab-icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>

                    <div className="ab-icon">
                        <i className="fa fa-th-large" aria-hidden="true"></i>
                    </div>

                    <div className="ab-icon">
                        <i className="fa fa-television" aria-hidden="true"></i>
                    </div>

                    <div className="ab-dd">
                        <hr/>
                        <h6>SORT BY &nbsp;:</h6>
                        
                        <select>
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

export default ActionBar
