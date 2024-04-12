import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <>
        <div
          className="Overlay"
          onClick={this.props.click}
          onKeyDown={this.props.click}
        >
          <div className="Modal">
            <img
              className="img--modal"
              src={this.props.src}
              alt={this.props.alt}
            />
          </div>
        </div>
      </>
    );
  }
}
