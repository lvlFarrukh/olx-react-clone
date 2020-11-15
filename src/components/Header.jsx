import React, { Component } from 'react'
import LOGO from '../media/olx_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faComment, faBell, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './LoginModal'

import { connect } from 'react-redux';
import { signup, login, setUser } from '../store/action'
// import $ from "jquery";

import { Link } from "react-router-dom";

class Header extends Component {
  
    render(){
        if (localStorage.getItem('user') !== null && this.props.user[0].uid === ""){
            this.props.setUser(JSON.parse(localStorage.getItem('user')));
        }


        // console.log(this.props.user)
        const loginStyle = {
            display: "inline", 
            textDecoration: "underline",
            cursor: "pointer",
            padding: "10px 2px",
            position: "relative",
            bottom: "5px"
        };

        const icons = <div className="noti-icons col">            

            { this.props.user[0].uid === "" ?   
                    
                <h4 style={loginStyle} type="button" data-toggle="modal" data-target="#exampleModal">Login</h4> 

                :<span>   
                    <FontAwesomeIcon style={{margin: "5px"}} icon={faComment} className="cIcon"/>
                    <FontAwesomeIcon style={{margin: "5px"}} icon={faBell} className="cIcon"/>

                    <img src={this.props.user[0].imageUrl === "" ? LOGO : this.props.user[0].imageUrl} style={{margin: "5px"}} alt="user" className="rounded-circle" width="40px" height="40px" />
                    <FontAwesomeIcon style={{marginLeft: "0px"}} icon={faAngleDown} className="cIcon"/>
                    
                </span>

            }

            <Link to="/post">
                <button className="sellB">
                    <FontAwesomeIcon icon={faPlus} />SELL
                </button>
            </Link>
            
        </div>

        return(
            <header className="p-2">
                <div className="container-fluid">
                <div className="col">
                    <div>
                    <img className="logo" src={LOGO} alt="" width="45px" height="25px" />
                    </div>
                    <div className="search-l"> 
                    <FontAwesomeIcon icon={faSearch} className="sIcon"/>
                    <input list="browsers" name="myBrowser" placeholder="Search city,area or loc..." />
                    <datalist id="browsers">
                        <option value="Chrome">
                        </option><option value="Firefox">
                        </option><option value="Internet Explorer">
                        </option><option value="Opera">
                        </option><option value="Safari">
                        </option><option value="Microsoft Edge">
                        </option></datalist>
                    </div>
                    <div className="input-group main-search">
                        <input type="text" placeholder="Find Cars, Mobile, Phones or more..." />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                <FontAwesomeIcon icon={faSearch} style={{fontSize: '25px', color: 'white'}} />
                            </button>
                        </div>
                    </div>

                    {icons}
                </div>
                </div>

                <div>
    
                <LoginModal />
            </div>
            </header>
        )
    }
}


const mapStateToProps = (state) => ({ 
    user: state.auth.userData,
})
    
const mapDispatchToProps = (dispatch)=> ({
    signup: (data)=> dispatch(signup(data)),
    login: (data)=> dispatch(login(data)),
    setUser: (payload)=> { dispatch(setUser(payload)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
