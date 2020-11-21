const InitialState = {
    allChatUser: {},
    chatUsers: [],
    chatUserObj: {},
    messages: [],
}

export default ( state = InitialState, action ) => {
    // console.log("action===>", action)
    switch (action.type) {
        case 'INITIALIZECHATUSERS':
            return ({
                ...state,
                chatUsers: [action.payload]
            })
            
        case 'SETALLCHATUSER':
            return ({
                ...state,
                allChatUser: action.payload
            })

        case 'SETCHATUSEROBJ':
            return ({
                ...state,
                chatUserObj: action.payload
            })

        default:
            break;
    }

    return state;
}


