import React, { Component } from 'react';
import DIV from '../../components/div/div'

import classes from './form.css';

class Form extends Component {
    state = {
        form: [],
    }


    render() {
        return (
            <form className="formContainer">

                <DIV className="appBar">
                    <p>EXAMPLE FORM</p>
                </DIV>
                <DIV className="formContent">
                    <DIV className="formInputGroup">
                        <label for="username">UserName</label>
                        <input type="text" name="username"></input>
                    </DIV>
                    <DIV className="formInputGroup">
                        <label for="password">Password&nbsp;</label>
                        <input type="password" name="password"></input>
                    </DIV>
                    <DIV className="formInputGroup formButtons">
                        <button>SUBMIT</button>
                        <button>RESET</button>
                    </DIV>
                </DIV>

            </form>
        );
    }
}

export default Form;