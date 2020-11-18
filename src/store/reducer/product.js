const InitialState = {
    allProduct: [],
    successUpload: false,
    sliderAdds: [],
    allSliderAdds: [],
    sliderAddsLength: null,
    currentSlider: 0,
    productView: 0,
    searchParameter: {},
    searchHandle: 0
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
        
        case 'CHANGESLIDE':
            return ({
                ...state,
                sliderAdds: action.payload.slide,
                currentSlider: action.payload.currentSlider,
            })
        
        case 'CHANGEITEMVIEW':
            return ({
                ...state,
                productView: action.payload
            })

        case 'SEARCHPARA':
            return ({
                ...state,
                searchParameter: action.payload,
                searchHandle: 1
            })
            
        case 'CHANGEHANDLESEARCH':
            return ({
                ...state,
                searchHandle: 0
            })

        default:
            break;
    }

    return state;
}


