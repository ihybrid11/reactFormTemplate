import React from 'react';

const Input = (props) => (
    <input
        type={props.type}
        className={props.class}
        onBlur={props.onBlur}
        name={props.name}
        required
    />
);

export default Input;
