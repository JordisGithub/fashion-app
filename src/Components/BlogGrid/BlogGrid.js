import React, { Component } from "react";


export default class BlogGrid extends Component {
  render() {
    return (
      <>
        <div className='blogGrid'>

          <img className='blogImage' src={this.props.blogPicture} />
          <h1>{this.props.title}</h1>
          <img className='blogImage' src={this.props.blogPicture2} />
          <h1>{this.props.title2}</h1>
          <img className='blogImage' src={this.props.blogPicture3} />
          <h1>{this.props.title3}</h1>
          <img className='blogImage' src={this.props.blogPicture4} />
          <h1>{this.props.title4}</h1>
        </div>
      </>
    );
  }
}