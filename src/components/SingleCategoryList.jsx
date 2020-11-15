import React from 'react'

class SingleCategoryList extends React.Component {
    render() {
        return(
            <div>

                <hr/>
                <div className="row show-cat-IV">
                    <h4>MAKE</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="manufacture-list">
                    <div>
                        <span>Honda (3456)</span>
                    </div>

                    <div>
                        <span>Honda (3456)</span>
                    </div>

                    <div>
                        <span>Honda (3456)</span>
                    </div>

                    <div>
                        <span>Honda (3456)</span>
                    </div>
                    
                </div>     
            </div>

        )
    }

}
export default SingleCategoryList
