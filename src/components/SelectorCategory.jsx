import React from 'react'

class SelectorCategory extends React.Component {
    render() {
        return (
           
            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>MAKE</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="manufacture-list">
                    <div>
                        <label className="cate-list-radio">
                            <input type="radio" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-radio">
                            <input type="radio" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-radio">
                            <input type="radio" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-radio">
                            <input type="radio" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                    <div>
                        <label className="cate-list-radio">
                            <input type="radio" name="make" id=""/>
                            <span>Maria</span>
                        </label>
                    </div>

                   
                </div> 

            </div>

        )
    }
}

export default SelectorCategory
