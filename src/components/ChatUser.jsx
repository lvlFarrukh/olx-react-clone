import React from 'react'
import { connect } from 'react-redux';

import { getChatUser, getAllChatUser, getChatUserObj } from '../store/action/chatapp'


class ChatUser extends React.Component {
    constructor() {
        super();

        this.state = {
            chat_users: null,
            handleChange: 0
        }
    }
    componentDidMount(){
        this.props.getAllChatUser();
        this.props.getChatUser(JSON.parse(localStorage.user).id);

    }

    // static getDerivedStateFromProps(props, state){
    //     return {
    //         chat_users: props.chatUsers
    //     }
    // }

    componentDidUpdate(){
        if (this.state.handleChange === 0){
            if (Object.keys(this.props.allChatUsers).length !== 0){
                this.setState({handleChange: 1})
                this.props.getChatUserObj(this.props.chatUsers, this.props.allChatUsers)
                this.setState({chat_users: this.props.getChatUserObj})

            }
        }
    
        
        

    }
    render() {
        console.log(this.props.getChatUserObj)
        return(
            <div className="col-4 chatUser">
                <div className="chatApp__users">

                    {Object.keys(this.props.chatUserObj).length !== 0 &&
                        this.props.chatUserObj.map((v,i)=>{
                            return  <div key={i} className="__users">
                                        <h4>{v.email.split("@")[0]}</h4>
                                    </div>
                        })
                    }

                   
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    chatUsers: state.chat.chatUsers,
    allChatUsers: state.chat.allChatUser,
    chatUserObj: state.chat.chatUserObj,
})
    
const mapDispatchToProps = (dispatch)=> ({
    getChatUser: (id)=> {dispatch(getChatUser(id))},
    getAllChatUser: ()=> {dispatch(getAllChatUser())},
    getChatUserObj: (id, obj)=> {dispatch(getChatUserObj(id, obj))},
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatUser);
