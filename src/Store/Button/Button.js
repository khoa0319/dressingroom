import React, { Component } from 'react';

//IMPORT COMPONENT

class Button extends Component {
    render(props) {
			const { showName, tabName} = this.props.item;
        const styles = {
            // button.btn
            buttonBtnElement: {
              width: "130px"
            }
          }
          
        return (
            <button type="button" className="btn btn-default" href={`#${tabName}`} data-toggle="tab" style={styles.buttonBtnElement}>
                <div className="hidden-xs">{showName}</div>
            </button>
        )
    }
}

export default Button;
