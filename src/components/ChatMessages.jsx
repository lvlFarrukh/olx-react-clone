import React from 'react'


class ChatMessages extends React.Component {
    render() {
        return(
            <div className="col-8 msg">

                <div className="msg__user">

                    <div className="user__msg">
                        <h4>
                            Hello
                        </h4>

                    </div>
                
                    <div className="chatUser__msg">
                        <p>Farrukh</p>
                        <h4>
                            Friends
                        </h4>
                    </div>
                    
                   
                </div>

                <div className="row send__msg">
                            <input type="text"/>
                            <button>Send</button>
                    </div>

                
            </div>
        );
    }
}
export default ChatMessages
