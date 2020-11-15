const InitialState = {
    allProduct: {},
    successUpload: false,
}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action)
    switch (action.type) {
        case 'INITIALIZEPRODUCT':
            return ({
                ...state,
                allProduct: {...state.allProduct, ...action.payload},
                successUpload: true,
            })

        case 'SETUPLOADSTATUS':
            return ({
                ...state,
                successUpload: false
            })

        default:
            break;
    }

    return state;
}