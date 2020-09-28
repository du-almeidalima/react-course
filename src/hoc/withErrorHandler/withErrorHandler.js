import React, {Fragment, Component} from 'react';
import Snackbar from '../../components/UI/Snackbar/Snackbar';

const withErrorHandler = (WrappedComponent, axiosInstance) => {

    return class extends Component {
        state = {
            show: false,
            message: null,
            type: null
        }

        componentDidMount() {
            // This is going to set this callback function to the AxiosInterceptor Reference passed as parameter
            if (axiosInstance) {
                axiosInstance.interceptors.response.use(
                    res => res,
                    err => {
                        this.setState({
                            show: true,
                            message: err.message,
                            type: 'Error'
                        })
                    }
                )
            }
        }

        close = () => {
            this.setState({
                show: false,
                message: null,
                type: null
            })
        }

        render() {
            return (
                <Fragment>
                    <Snackbar show={this.state.show}
                              message={this.state.message}
                              type={this.state.type}
                              close={this.close}
                    />
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }

    }
}

export default withErrorHandler;