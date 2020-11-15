import React from 'react'

class CheckBoxCategory extends React.Component {
    render() {
        return(
            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>TYPE</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="manufacture-list">

                    <div>
                        <label className="cate-list-checkbox">
                            <input type="checkbox" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-checkbox">
                            <input type="checkbox" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-checkbox">
                            <input type="checkbox" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-checkbox">
                            <input type="checkbox" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-checkbox">
                            <input type="checkbox" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                </div>

            </div>
        )
    }
}

export default CheckBoxCategory
