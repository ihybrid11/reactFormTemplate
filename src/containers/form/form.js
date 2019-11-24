import React, { Component } from 'react';
import DIV from '../../components/div/div'

import classes from './form.css';
import Input from '../../components/UI/Input/Input';

class Form extends Component {

    formUserName = '';
    formUserPassword = '';
    formState = false;

    state = {
        form: {
            username: '',
            usernameDirty: false,
            password: '',
            passwordDirty: false,
        },
        error: '',
        submitDisable: true
    }

    componentDidMount = () => {
        // console.log('component did mount and state is = ' + JSON.stringify(this.state.form));

    }

    inputOnChangeHandler = (event) => {
        // if (event.target.value === '') {
        //     console.log('value = ' + true);

        // }
        console.log(event.target);

        if (event.target.name === 'username') {
            this.formUserName = event.target.value;
            this.setState({ usernameDirty: true });
        } else {
            this.formUserPassword = event.target.value;
            this.setState({ passwordDirty: true });
        }

        const disableSubmit = (this.formUserName !== '' && this.formUserPassword !== '') ? false : true;

        this.setState({ submitDisable: disableSubmit });


    }

    submitClickHandler = (event) => {

        event.preventDefault();
        this.setState({
            form: {
                username: this.formUserName,
                password: this.formUserPassword
            }
        });

        console.log(this.state);
    }

    resetClickHandler = (event) => {
        this.setState(this.getInitialState());

        // this.formState = !this.formState;
    }

    render() {
        const showError = (this.formUserName === '' && this.state.usernameDirty) ? (
            <span>
                <p className="errorText" >REQUIRED</p>
            </span>
        ) : null;

        const showErrorPass = (this.formUserPassword === '' && this.state.passwordDirty) ? (
            <span>
                <p className="errorText" >REQUIRED</p>
            </span>
        ) : null;

        return (
            <form className="formContainer">

                <DIV className="appBar">
                    <p>EXAMPLE FORM</p>
                </DIV>
                <DIV className="formContent">
                    <DIV className="formInputGroup">
                        <DIV>
                            <label htmlFor="username">UserName</label>
                            {showError}
                        </DIV>


                        <Input
                            type="text"
                            name="username"
                            onBlur={this.inputOnChangeHandler}
                            required
                        ></Input>

                    </DIV>
                    <DIV className="formInputGroup">
                        <DIV>
                            <label htmlFor="password">Password&nbsp;</label>
                            {showErrorPass}
                        </DIV>

                        <Input
                            type="password"
                            name="password"
                            onBlur={this.inputOnChangeHandler}
                            required
                        ></Input>
                    </DIV>
                    <DIV className="formInputGroup formButtons">
                        <button onClick={this.submitClickHandler} disabled={this.state.submitDisable}>SUBMIT</button>
                        <button onClick={this.resetClickHandler}>RESET</button>
                    </DIV>
                </DIV>

            </form>
        );
    }
}

export default Form;