import React from 'react';
import './signin-and-signup-page.scss';
import FormInput from "../../components/form-input/form-input";

class SignInAndSignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <h1>I Already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' type='email' value={this.state.email}
                               handleChange={this.handleChange}
                               required/>
                    <FormInput name='password' label='Password' type='password' value={this.state.password}
                               handleChange={this.handleChange}
                               required/>
                    <input type='submit' value='Sign In'/>
                </form>
            </div>
        )
    }
}

export default SignInAndSignUpPage;
