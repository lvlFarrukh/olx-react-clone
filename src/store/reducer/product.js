const InitialState = {
    allProduct: [],
    successUpload: false,
    sliderAdds: []
}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action)
    switch (action.type) {
        case 'INITIALIZEPRODUCT':
            return ({
                ...state,
                allProduct: action.payload.adds,
                sliderAdds: action.payload.sliders
            })

        case 'SETPRODUCT':
            return ({
                ...state,
                allProduct: [...state.allProduct, action.payload],
                successUpload: true,
            })

        case 'SETUPLOADSTATUS':
            return ({
                ...state,
                successUpload: false
            })
        
        // case 'SETSLIDERADDS':
        //     return ({
        //         ...state,
                
        //     })

        default:
            break;
    }

    return state;
}


