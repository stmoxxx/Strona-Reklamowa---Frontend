import React from 'react';
import myBtn from './BlueButton.module.css'
const BlueButton = ({children, ...props}) => {
    return (
        <button {...props} className={myBtn.btn_container}>
            {children}
        </button>
    );
};

export default BlueButton;