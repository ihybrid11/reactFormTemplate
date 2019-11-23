import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import classes from './Layout.css';

const Layout = () => (
    <div className="layout">
        <div className="formContainer">
            <div className="appBar">
                <p>EXAMPLE FORM</p>
            </div>
            <form className="formContent">
                <div className="formInputGroup">
                    <label for="username">UserName</label>
                    <input type="text" name="username"></input>
                </div>
                <div className="formInputGroup">
                    <label for="password">Password&nbsp;</label>
                    <input type="password" name="password"></input>
                </div>
                <div className="formInputGroup formButtons">
                    <button>SUBMIT</button>
                    <button>RESET</button>
                </div>
            </form>
        </div>
    </div>
);

export default Layout;