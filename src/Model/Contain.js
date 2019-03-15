import React, { Component } from 'react';
import Body from './Contain/Body';

// Import child component

class Contain extends Component {    
    render() {
        const style = {
            containClass: {
                width: "460px",
                height: "590px",
                margin: "0 auto",
                background: "url('./images/background/background_998.jpg')",
                position: "relative"
            }
        };
        return (
            <div className="contain" style={style.containClass}>
                <Body />
            </div>
        );
    }
}

export default Contain;