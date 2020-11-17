const InitialState = {
    allProduct: [],
    successUpload: false,
    sliderAdds: [],
    allSliderAdds: [],
    sliderAddsLength: null,
    currentSlider: 0
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

        default:
            break;
    }

    return state;
}


