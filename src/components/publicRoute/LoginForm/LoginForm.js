import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../../services/auth-api-service'
import UserContext from '../../../contexts/userContext'


class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    };

    static contextType = UserContext;

    state = { error: null };

    firstInput = React.createRef();

    handleSubmit = ev => {
        ev.preventDefault()

        const { username, user_password } = ev.target;

        AuthApiService.postLogin({
            username: username.value,
            user_password: user_password.value,
        })
            .then(res => {
                username.value = ''
                user_password.value = ''
                this.context.processLogin(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error.message })
            });
    };

    componentDidMount() {
        this.firstInput.current.focus();
    };

    render() {
        const { error } = this.state
        console.log(error)
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmit}
            >
                {error &&
                    <p role='alert'
                        className='error-message'
                        aria-live='assertive'>{error}</p>}

                <div>
                    <label htmlFor='login-username-input'>username</label>
                    <input
                        ref={this.firstInput}
                        id='login-username-input'
                        name='username'
                        type='text'
                        required
                        aria-required='true'
                        autoComplete='username'
                    />
                </div>

                <div>
                    <label htmlFor='login-password-input'>password</label>
                    <input
                        id='login-password-input'
                        name='user_password'
                        type='password'
                        required
                        aria-required='true'
                        autoComplete='current-password'
                    />
                </div>
                <button
                    type='submit'
                    className='form-button'
                >
                    logIn
                    </button>
                <Link
                    to='/register'
                >
                    create an account
                        </Link>

            </form>
        );
    };
};

export default LoginForm;