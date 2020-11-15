import React from 'react'

class MultiCategoryList extends React.Component{
    render() {
        return(
            <div>
                <div className="row show-cat-IV">
                    <h4>CATEGORIES</h4>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </div>  

                <div className="categories-VI">
                    <ul>
                        <li>
                            <div>
                                <span>
                                    All Categories
                                </span>
                            </div>
                        </li>

                    <ul className="subcategories-VI"> 
                        <li>
                            <div>
                                <span>
                                    Vehicles
                                </span>
                            </div>
                        </li>

                        <ul className="final-categories-VI">
                            <li>
                                <div>
                                    <span>
                                            Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span>
                                            Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span>
                                        Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span>
                                            Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span>
                                            Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <span>
                                            Car on installments (8782)
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </ul>
                    </ul>
                </div>    
            </div>
        )
    }
}

export default MultiCategoryList
