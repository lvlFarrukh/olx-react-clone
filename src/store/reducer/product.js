const InitialState = {
    allProduct: [],
    successUpload: false,
    sliderAdds: [],
    allSliderAdds: [],
    sliderAddsLength: null
}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action)
    switch (action.type) {
        case 'INITIALIZEPRODUCT':
            return ({
                ...state,
                allProduct: action.payload.adds,
                sliderAdds: action.payload.sliders,
                allSliderAdds: action.payload.sliderAdds,
                sliderAddsLength: action.payload.sliderAddsL,
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


