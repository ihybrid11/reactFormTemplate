import React from 'react';
import classes from './div.css';

const DIV = ({ children, className }) => (
    <div className={className}>
        {children}
    </div>
);

export default DIV; 