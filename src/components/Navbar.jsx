import React, { Component } from 'react'

import { Link } from "react-router-dom";


class Navbar extends Component {
    render(){
        return(
            // <!-- Catagory Navbar -->
            <section>
                <div className="nav-bar">
                    <ul>
                        <li><strong> ALL CATEGORIES<i className="fa fa-angle-down" aria-hidden="true"></i></strong></li>
                        <li><Link className="navLink" to="/items">Mobiles Phones</Link></li>
                        <li><Link className="navLink" to="/items">Cars</Link></li>
                        <li><Link className="navLink" to="/items">Motarcycle</Link></li>
                        <li><Link className="navLink" to="/items">House</Link></li>
                        <li><Link className="navLink" to="/items">TV-Video-Audio</Link></li>
                        <li><Link className="navLink" to="/items">Tablets</Link></li>
                        <li><Link className="navLink" to="/items">Land and Plotes</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}
  
export default Navbar
