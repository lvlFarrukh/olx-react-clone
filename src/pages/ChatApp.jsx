import React from 'react'
import './css/chatapp.css'

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ChatUser from '../components/ChatUser';
import ChatMessages from '../components/ChatMessages';

class ChatApp extends React.Component {
    render(){
        return(
            <div className="container-fluid mainChatapp__div">
                
                <Header />

                <Navbar />

                <div className="row chatapp__maindiv">
                    <ChatUser />

                    <ChatMessages />
                </div>


            </div>
        );
    }
}

export default ChatApp
