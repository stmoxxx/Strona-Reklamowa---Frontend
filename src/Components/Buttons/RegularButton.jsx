import React from 'react';
import myBtn from './RegularButton.module.css'
const RegularButton = ({children, ...props}) => {
    return (
        <button {...props} className={myBtn.btn_container}>
            {children}
        </button>
    );
};

export default RegularButton;