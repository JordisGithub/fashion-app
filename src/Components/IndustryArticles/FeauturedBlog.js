import React, { Component } from "react";

export default class FeauturedBlog extends Component {
  render() {
    return (
      <>
        <div> {this.props.title}</div>
        <div> {this.props.tag}</div>
        <img className='mainImage' src={this.props.mainPicture} />
        <div> {this.props.blogSummary} </div>
        <div className={this.props.outline}></div>



      </>
    );
  }
}
