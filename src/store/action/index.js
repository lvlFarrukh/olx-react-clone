import { auth, db,} from '../../config/firebase' 


// const loginWithFacebook = ()=>{
//     return (dispatch)=> {
//         var provider = new firebaseApp.auth.FacebookAuthProvider();
//         firebaseApp.auth().signInWithPopup(provider)
//             .then(function(result) {
//                 var token = result.credential.accessToken;
//                 // The signed-in user info.
//                 var user = result.user;
//                 // ...
//                 console.log("user==>",user)
//             }).catch(function(error) {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 // The email of the user's account used.
//                 var email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 var credential = error.credential;
//                 // ...
//             });
//         }
// }

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
            data['chatUsers'] = [];

            db.ref(`users/${data.id}`).set(data);

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
            db.ref(`users/${data.id}`).set(data);

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


const addsForSlider = (data)=> {
    let payload = [];
    var i,j,chunk = 4;
    for (i=0,j=data.length; i<j; i+=chunk) {
        payload.push(data.slice(i,i+chunk));
    }

    return payload;
    // console.log(payload)
    // return (dispatch)=> {
    //     dispatch({type: "SETSLIDERADDS", payload: payload})
    // }
}


const postAdd = (payload)=> {
    let key = db.ref('Adds').push().key;
    payload['key'] = key;
    db.ref(`Adds/${key}`).set(payload)
    return (dispatch)=> {
        dispatch({type: "SETPRODUCT", payload: payload})
    }   
}

const getAllAdds = ()=> {
    return (dispatch)=> {
        let adds = [];
        db.ref('/').child('Adds').on('child_added', snapshot=> {
            adds.push(snapshot.val())
        })   
        setTimeout(()=> { 
            let sliderAdds = addsForSlider(adds);
            dispatch({type: "INITIALIZEPRODUCT", payload: {adds: adds, sliderAddsL: sliderAdds.length - 1,sliderAdds: sliderAdds, sliders: sliderAdds[0]}})
        },4000)
    }
}

// --------------------- Slider Update --------------------

const forwordSlider = (allSliderAdds, currentSlider, sliderAddsLength)=>{
    let newSlide = currentSlider < sliderAddsLength ? currentSlider + 1 : 0
    return (dispatch)=> {
        dispatch({ type: "CHANGESLIDE", payload: {slide: allSliderAdds[newSlide], currentSlider: newSlide} });
    }
}

const backwordSlider = (allSliderAdds, currentSlider, sliderAddsLength)=>{
    let newSlide = currentSlider === 0 ? sliderAddsLength : currentSlider - 1;
    return (dispatch)=> {
        dispatch({ type: "CHANGESLIDE", payload: {slide: allSliderAdds[newSlide], currentSlider: newSlide} });
    }
}

const changeItemsView = (val)=> {
    return (dispatch)=>{
        dispatch({ type: "CHANGEITEMVIEW", payload: val})
    }
}

const searchAdds = (searchAttr)=> {
    // console.log(searchAttr)
    return (dispatch)=>{
        dispatch({ type: "SEARCHPARA", payload: searchAttr})
    }
}

const changeHandleSearch = ()=> {
    return (dispatch)=>{
        dispatch({ type: "CHANGEHANDLESEARCH"})
    }
}

const subFilter = (obj)=> {
    return (dispatch)=> {
        switch (obj.type) {
            case "company":
                dispatch({type: "SUBFILTER", payload: obj.action})
                break;
            
            case "condition":
                    dispatch({type: "SUBFILTER", payload: obj.action})
                break
        
            default:
                dispatch({type: "SUBFILTER", payload: null})
                console.log("working")
                break;
        }
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
    forwordSlider,
    backwordSlider,
    changeItemsView,
    searchAdds,
    changeHandleSearch,
    subFilter,
    // loginWithFacebook
}