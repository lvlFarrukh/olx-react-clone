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
            locationInput: "",
            searching: ""
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
        // console.log(this.props)
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
                    <input onChange={(e)=> {this.setState({locationInput: e.target.value})}} list="location" name="myBrowser" placeholder="Search city,area or loc..." />
                        <datalist id="location">
                            <option value="Karachi"></option>
                            <option value="Sindh"></option>
                            <option value="Punjab"></option>
                            <option value="Balochistan"></option>
                            <option value="Islamabad"></option>
                            <option value="hydrabad"></option>
                            <option value="lahore"></option>
                            <option value="chakwal"></option>
                        </datalist>
                    </div>
                    <div className="input-group main-search">
                        <input onChange={(e)=> {this.setState({searching: e.target.value})}} type="text" placeholder="Find Cars, Mobile, Phones or more..." />
                        <div className="input-group-append">
                            <Link to={{
                                pathname: "/items",
                                state: {location: this.state.locationInput,
                                        search: this.state.searching,
                                        allAdds: this.props.adds}
                            }}>
                                <button className="btn btn-outline-secondary main-search__btn" type="button">
                                    <FontAwesomeIcon icon={faSearch} style={{fontSize: '25px', color: 'white'}} />
                                </button>
                            </Link>
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
