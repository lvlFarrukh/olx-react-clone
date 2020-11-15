import { auth, db} from '../../config/firebase' 


const setUploadStatus = ()=> {
    return (dispatch)=> {
        dispatch({type: "SETUPLOADSTATUS",})
    }
}

const setUser = (payload)=> {
    // console.log(payload)
    return (dispatch)=> {
        dispatch({type: 'setAuthData', data: payload})
    }
}

const setState = (data)=> {
    return (dispatch)=> {
        dispatch({type: 'SETDATA', data: data})
    }
}

const signup = data => {
    const signupPromise = new Promise(function(resolve, reject) {

        let uid = {id: null};
        auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((data)=> {
            uid = data.user.uid
            resolve(uid);
        })
        .catch(function(error) {
            reject(error.message)
        });
    });


    return (dispatch)=> {
        signupPromise
        .then( uid => { 
            data['id'] = uid;
            dispatch({type: 'setAuthData', data: data});
        })
        .catch( error => { 
            alert(error);
            dispatch({type: 'setAuthData', data: {}});
        })
    }

}


const login = data => {

    const loginPromise = new Promise(function(resolve, reject) {

        let uid = {id: null};
        auth.signInWithEmailAndPassword(data.email, data.password)
        .then((data)=> {
            uid = data.user.uid
            resolve(uid);
        })
        .catch(function(error) {
            reject(error.message)
        });
    });

    return (dispatch)=> {
        loginPromise
        .then( uid => { 
            data['id'] = uid;
            data['imageUrl'] = "";
            delete data['password'];
            localStorage.setItem('user', JSON.stringify(data));
            dispatch({type: 'setAuthData', data: data});
        })
        .catch( error => { 
            alert(error);
            dispatch({type: 'setAuthData', data: {}});
        })
        // data = {...data, uid}
        // dispatch({type: 'authData', data: data.uid.id != null ? data : {}});
    }
}


const postAdd = (payload)=> {
    // console.log(payload)
    db.ref('Adds').push(payload.data)
    return (dispatch)=> {
        dispatch({type: "SETPRODUCT", payload: payload})
    }   
}

const getAllAdds = ()=> {

    const addsPromise = new Promise(function(resolve) {
        db.ref('Adds').on('value', snapshot=> {
            resolve(snapshot.val());
        })        
    });

    return (dispatch)=> {
        // let adds = [];
        addsPromise
        .then((data)=> {
            // dispatch({type: "INITIALIZEPRODUCT", payload: data})
        })
        
    }
}


export {
    setState,
    signup,
    login,
    postAdd,
    setUser,
    setUploadStatus,
    getAllAdds,
}