import React, { Component } from 'react'
import { connect } from 'react-redux';
import {searchAdds} from '../store/action';

import { Link } from "react-router-dom";


class Navbar extends Component {
    render(){
        // console.log(this.props)
        return(
            // <!-- Catagory Navbar -->
            <section>
                <div className="nav-bar">
                    <ul>
                        <li><strong> ALL CATEGORIES<i className="fa fa-angle-down" aria-hidden="true"></i></strong></li>
                        <li onClick={()=> {this.props.searchAdds({location: null, search: "Mobile"})}}><Link to={{
                                    pathname: '/items',
                                    state: {
                                        location: null,
                                        search: "Mobile",
                                        allAdds: this.props.adds
                                    }
                                }} className="navLink">Mobiles Phones</Link>
                        </li>
                                
                        <li><Link onClick={()=> {this.props.searchAdds({location: null, search: "Vehicle"})}} to={{
                                    pathname: '/items',
                                    state: {
                                        location: null,
                                        search: "Vehicle",
                                        allAdds: this.props.adds
                                    }
                                }} className="navLink">Cars</Link>
                        </li>

                        <li><Link onClick={()=> {this.props.searchAdds({location: null, search: "Bike"})}} to={{
                                    pathname: '/items',
                                    state: {
                                        location: null,
                                        search: "Bike",
                                        allAdds: this.props.adds
                                    }
                                }} className="navLink">Motarcycle</Link>
                        </li>

                        <li><Link onClick={()=> {this.props.searchAdds({location: null, search: "Tablet"})}} to={{
                                    pathname: '/items',
                                    state: {
                                        location: null,
                                        search: "Tablet",
                                        allAdds: this.props.adds
                                    }
                                }} className="navLink">Tablets</Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
  
const mapStateToProps = (state) => ({ 
    adds: state.adds.allProduct,
})
    
const mapDispatchToProps = (dispatch)=> ({
    searchAdds: (obj)=> { dispatch(searchAdds(obj))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
