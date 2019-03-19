import React, { Component } from 'react';

class Item extends Component {

  imgSrcTransferItem = () => {
    this.props.imgSrcTransferTabpane(this.props.item);
  }

  render() {
    return (
      <div className="item col-md-3">
        <img src={this.props.item.imgSrc_jpg} alt="img"/>
        <button 
        className="btn btn-primary"
        onClick={this.imgSrcTransferItem.bind(this)}>
          thử đồ
        </button>
      </div>
    );
  }
}

export default Item;