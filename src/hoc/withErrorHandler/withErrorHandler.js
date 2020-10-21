import React, { Fragment, Component } from "react";
import Snackbar from "../../components/UI/Snackbar/Snackbar";

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    state = {
      show: false,
      message: null,
      type: null,
    };

    // == LIFECYCLE ==
    UNSAFE_componentWillMount() {
      // This is going to set this callback function to the AxiosInterceptor Reference passed as parameter
      if (axiosInstance) {
        this.resInterceptor = axiosInstance.interceptors.response.use(
            (res) => res,
            (err) => {
              this.setState({
                  show: true,
                  message: err.message,
                  type: "Error",
              });

              return Promise.reject(err);
            }
        );
      }
    }

    componentWillUnmount() {
      // This ensures that whenever this component is no longer used, the interceptor is also destroyed.
      axiosInstance.interceptors.response.eject(this.resInterceptor);
    }

    // == METHODS ==
    close = () => {
      this.setState({
        show: false,
        message: null,
        type: null,
      });
    };

    render() {
      return (
        <Fragment>
          <Snackbar
            show={this.state.show}
            message={this.state.message}
            type={this.state.type}
            close={this.close}
          />
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;

/*
 * React will call "componentDidMount" after all "componentDidMount" child calls were finished. However, if one of them fails
 * This component's "componentDidMount" method will never be executed. Further, if the children components make http calls
 * in theirs "componentDidMount" methods, those call would execute before this component. So setting a interceptor would not work as
 * intended.
 *
 * Also, trying to place a setState in the Constructor throws an error, React can't call setState on a component that isn't mounted
 * yet.
 * 
 * That's why I'm using componentWillMount even though it's deprecated.
 */
