import React from 'react';

const Label = ({ forChild, children, className }) => (
    <label for={forChild} className={className}>
        {children}
    </label>
);

export default Label;