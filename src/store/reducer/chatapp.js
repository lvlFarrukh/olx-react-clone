const InitialState = {
    allChatUser: {},
    chatUsers: [],
    chatUserObj: {},
    currentMessages: [],
    currentCUid: "" 
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

        case 'SETMESSAGES':
            return ({
                ...state,
                currentMessages: action.payload,
            })

        // case 'ADDMSG':
        //     return ({
        //         ...state,
        //         currentMessages: [...state.currentMessages, action.payload],
        //     })
            
        case 'SETCU':
            return ({
                ...state,
                currentCUid: action.payload
            })
        default:
            break;
    }

    return state;
}


