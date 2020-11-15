const InitialState = {
    userData : [
        {
            uid: '',
            email: '',
            imageUrl: '',
        }
    ],

}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action)
    switch (action.type) {
        case 'setAuthData':
            return ({
                ...state,
                userData: [action.data],
            })
    
        default:
            break;
    }

    return state;
}