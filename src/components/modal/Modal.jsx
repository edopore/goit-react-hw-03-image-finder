import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <>
        <div className="Overlay">
          <div className="Modal">
            <img src={this.props.src} alt={this.props.alt} />
          </div>
        </div>
      </>
    );
  }
}
