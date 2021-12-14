import React, { Component } from "react";
import ItemsCart from "./ItemsCart";

import { connect } from "react-redux";
import { forwordSlider, backwordSlider } from "../store/action";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      slider: [],
    };
  }

  // componentDidMount() {
  //     console.log(this.props)
  // }

  // componentWillUpdate() {
  //     this.setState({
  //         limit: this.props.SliderAdds.length
  //     })
  // }

  static getDerivedStateFromProps(props, state) {
    return {
      slider: props?.sliderAdds,
    };
  }

  render() {
    return (
      // New or best recommended slider
      <section>
        <div className="container-fluid new-add" style={{ height: "340px" }}>
          <div className="row">
            <h1>More on Apartment and Flats</h1>
            <h6 className="vm">View more</h6>
          </div>
          <div className="row" style={{ marginLeft: "0px" }}>
            {this.state?.slider?.map((v) => {
              return <ItemsCart key={v.key} attr={v} />;
            })}
          </div>

          {this.state?.slider.length > 0 &&
            (
              <div className="row navi-btn">
                <div
                  className="l-btn"
                  onClick={() => {
                    this.props.backwordSlider(
                      this.props?.allSliderAdds,
                      this.props?.currentSlider,
                      this.props?.sliderAddsLength
                    );
                  }}
                >
                  <i className="fa fa-angle-left" aria-hidden="true" />
                </div>
                <div
                  className="r-btn"
                  onClick={() => {
                    this.props.forwordSlider(
                      this?.props?.allSliderAdds,
                      this?.props?.currentSlider,
                      this?.props?.sliderAddsLength
                    );
                  }}
                >
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
              </div>
            )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.adds.allProduct,
  sliderAdds: state.adds.sliderAdds,
  sliderAddsLength: state.adds.sliderAddsLength,
  allSliderAdds: state.adds.allSliderAdds,
  currentSlider: state.adds.currentSlider,
});

const mapDispatchToProps = (dispatch) => ({
  forwordSlider: (allSliderAdds, currentSlider, sliderAddsLength) => {
    dispatch(forwordSlider(allSliderAdds, currentSlider, sliderAddsLength));
  },
  backwordSlider: (allSliderAdds, currentSlider, sliderAddsLength) => {
    dispatch(backwordSlider(allSliderAdds, currentSlider, sliderAddsLength));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
