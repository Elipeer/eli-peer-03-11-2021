import React, { Component } from "react";
import { connect } from "react-redux";
import interceptors from "../services/interceptor";
import { setLoaderOn, setLoaderOff } from "../store/reducers/appSettings";
import ContentLoader from "../wigdets/ContentLoader";

class InterceptorsComponent extends Component {
  constructor(props) {
    super(props);
    interceptors.setupInterceptors(props.history, this.toggleLoader);
  }

  render() {
    return <div>{this.props.loaderOn ? <ContentLoader /> : null}</div>;
  }

  toggleLoader = (isTurnOn) => {
    if (isTurnOn) this.props.setLoaderOn();
    else this.props.setLoaderOff();
  };
}

const mapStateToProps = (state) => {
  return {
    loaderOn: state.persistedReducer.loaderOn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoaderOn: () => dispatch(setLoaderOn()),
    setLoaderOff: () => dispatch(setLoaderOff())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterceptorsComponent);
