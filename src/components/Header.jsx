import React, { Component } from 'react'
import LOGO from '../media/olx_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faComment, faBell, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './LoginModal'

import { connect } from 'react-redux';
import { signup, login, setUser, getAllAdds } from '../store/action'
// import $ from "jquery";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(){
        super();
        this.state = {
            hasAdds: false,
        }
    }
    
    async componentDidMount(){
        if (localStorage.getItem('user') !== null && this.props.user[0].uid === ""){
            this.props.setUser(JSON.parse(localStorage.getItem('user')));
        } 

        if (!this.state.hasAdds){
            await this.props.getAllAdds()
            this.setState({ hasAdds: true })
        }
    }
    render(){ 
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
                    <Link to="/">
                        <img className="logo" src={LOGO} alt="" width="45px" height="25px"/>
                    </Link>
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
    adds: state.adds.allProduct,
})
    
const mapDispatchToProps = (dispatch)=> ({
    signup: (data)=> dispatch(signup(data)),
    login: (data)=> dispatch(login(data)),
    setUser: (payload)=> { dispatch(setUser(payload)) },
    getAllAdds: ()=> { dispatch(getAllAdds() )},

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
