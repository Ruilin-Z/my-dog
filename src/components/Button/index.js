import React from 'react';
import './index.css';
const Button = (props) => {
    return <div className="my-dog-button">
        {props.children}
    </div>
}
export default Button;