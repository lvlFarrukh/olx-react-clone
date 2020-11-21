import { db,} from '../../config/firebase' 

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

export {
    getChatUser,
    addChatUser,
    getAllChatUser,
    getChatUserObj
}