import React, { useContext } from "react";
import { ColorContext } from "../../context";

const Contact = () => {
    const fontColor = useContext(ColorContext);
    console.log(fontColor);

    return (
        <div style={fontColor}>
            <h1>Contact Us</h1>
        </div>
    );
};

export default Contact;
