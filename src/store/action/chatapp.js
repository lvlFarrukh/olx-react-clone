import { db,} from '../../config/firebase' 

const mergeId = (uid, cuid)=> {
    return uid > cuid ? uid+cuid : cuid+uid;
}

const getChatUser = (id)=> {
    let getChatPromise = new Promise( (resolve, reject)=> {
        db.ref(`users/${id}/chatUser`).on( 'child_added', snapshot=> {
            resolve(snapshot.val())
        })
    })

    return (dispatch)=> {
        getChatPromise
        .then( data=> {
            dispatch({type: "INITIALIZECHATUSERS", payload: data})
        })
       
    }
}


const addChatUser = (uid, chatUid)=> {
    return (dispatch)=> {
        db.ref(`users/${uid}/chatUser/${chatUid}`).set([chatUid])
        db.ref(`users/${chatUid}/chatUser/${uid}`).set([uid])

    }
}

const getAllChatUser = ()=> {
    return (dispatch)=> {
        let getAllChatUser = new Promise( (resolve, reject)=> {
            db.ref('users').on("value", snapshot=> {
                resolve(snapshot.val())
            })
        })

        getAllChatUser
        .then( data=> {
            dispatch({type: "SETALLCHATUSER", payload: data})
        })
    }
}

const getChatUserObj = (uid, allchatUser)=> {
    let chatUserobj = []
    for (var items in allchatUser){
        delete allchatUser[items].password;
        delete allchatUser[items].chatUser;
        uid.some(e => items.includes(e)) && chatUserobj.push(allchatUser[items])
    }

    return (dispatch)=> {
        dispatch({type: "SETCHATUSEROBJ", payload: chatUserobj})
    }
}

const getMessages = (uid, cuid)=> {
    let messageId = mergeId(uid, cuid);
    // console.log(messageId)
    return (dispatch)=> {
        let msg = [];
        let getMsgPromise = new Promise((resolve)=> {
            db.ref(`Chats/${messageId}`).on('child_added', (snapshot)=> {
                // console.log(snapshot.val())
                // resolve(snapshot.val())
                msg.push(snapshot.val())
            }) 
            setTimeout(()=> {resolve(msg)},2000)
        })
        
        getMsgPromise
        .then(msg=> {
            dispatch({type: "SETMESSAGES", payload: msg})
        })
    }
} 

const sendMessage = (uid, name, cuid, message)=> {
    let id = mergeId(uid, cuid);
    console.log(cuid)
    let msgObj = {
        id: uid,
        name: name,
        message: message
    }
    return (dispatch)=> {
        db.ref(`Chats/${id}`).push(msgObj);
        // dispatch({type: "ADDMSG", payload: msgObj})
    }
}

const setCurrentChatUser = (cuid)=>{
    return (dispatch)=> {
        dispatch({type: "SETCU", payload: cuid})
    }
}

export {
    getChatUser,
    addChatUser,
    getAllChatUser,
    getChatUserObj,
    getMessages,
    sendMessage,
    setCurrentChatUser
}