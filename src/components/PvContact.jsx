import React from 'react'
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import  { addChatUser } from '../store/action/chatapp'

class PvContact extends React.Component {
   
    render() {
        const addUser = ()=> { this.props.addChatUser(JSON.parse(localStorage.user).id, this.props.uid) }
        return(

            <div className="pv-sellerDesp">
                <div className="pv-sd-h">
                    <h5>Seller description</h5>
                </div>

                <div className="row">
                    <div className="pv-sd-logo">
                        <img src={this.props.images} alt=""/>
                    </div>
                    <div className="pv-sd-name">
                        <span className="pv-sd-n1">Fine Tech.pk</span>
                        <span className="pv-sd-n2">Member since Aug 2019</span>
                    </div>
                    <div className="pv-sd-icon">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="pv-sd-div-btn">
                    {localStorage.user !== undefined &&
                    this.props.uid === JSON.parse(localStorage.getItem('user')).id ? 
                        <button className="pv-sd-btn">
                            My own Add
                        </button>
                    :
                        <Link to={{
                            pathname: "/chat",
                            state: {user: localStorage.getItem('user').id,
                                    chatUid: this.props.uid}
                        }}>
                            <button onClick={()=> {addUser()}} className="pv-sd-btn">
                                Chat to Seller
                            </button>
                        </Link>
                    }
                </div>

                <div>
                    <div className="row pv-sd-div">
                        <div className="pv-sd-ficon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="pv-sd-num">
                            <span>** *** ****</span>
                        </div>
                        <div className="pv-sd-sn">
                            <span>Show number</span>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({ 
   
})
    
const mapDispatchToProps = (dispatch)=> ({
    addChatUser: (uid, chatuid)=> {dispatch(addChatUser(uid, chatuid))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PvContact);
