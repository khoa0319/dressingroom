import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="item col-md-3">
        <img src={this.props.item.imgSrc_jpg} alt="img"/>
      </div>
    );
  }
}

export default Item;