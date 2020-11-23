import React from 'react'
import { connect } from 'react-redux';
import { sendMessage, getMessages, } from '../store/action/chatapp.js';

class ChatMessages extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "",
        }
    }

    componentDidUpdate(){
        this.props.getMessages(JSON.parse(localStorage.user).id, this.props.currentCUid)
    }
    render() {
        // console.log(this.props.currentCUid)
        return(
            <div className="col-8 msg">

                <div className="msg__user">

                    {/* <div className="user__msg">
                        <h4>
                            Hello
                        </h4>
"chatUser__msg"
                    </div> */}
                    
                        {this.props.currentMessages.length !== 0 &&
                        this.props.currentMessages.map((v,i)=> {
                            return    <div key={i} className={JSON.parse(localStorage.user).id === v.id ? "chatUser__msg" : "user__msg"}>
                                        <p>{v.name}</p>
                                        <h4>
                                            {v.message}
                                        </h4>
                                    </div>
                        })}
                    
                    
                   
                </div>

                <div className="row send__msg">
                            <input type="text" onChange={(e)=> {this.setState({message: e.target.value})}} value={this.state.message}/>
                            <button onClick={()=> {
                                this.props.sendMessage(JSON.parse(localStorage.user).id, JSON.parse(localStorage.user).email.split("@")[0], this.props.currentCUid, this.state.message)                                
                                this.setState({message: ""})
                                }}>                                  
                                    Send
                            </button>
                    </div>

                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    chatUserObj: state.chat.chatUserObj,
    currentCUid: state.chat.currentCUid,
    currentMessages: state.chat.currentMessages,
})
    
const mapDispatchToProps = (dispatch)=> ({
    getMessages: (uid, cuid)=> {dispatch(getMessages(uid, cuid))},
    sendMessage: (uid, name, cuid, message)=> {dispatch(sendMessage(uid, name, cuid, message))},
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);

