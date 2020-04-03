import React, { Component } from "react";

export default class FeauturedBlog extends Component {
  render() {
    return (
      <>
        <div className='featuredBlogContainer'>

          <div className='featuredBlogTitle'> {this.props.title}</div>
          <div className='tag'> {this.props.tag}</div>
          <img className='mainImage' src={this.props.mainPicture} />
          <div className='blogSummary'> {this.props.blogSummary} </div>
          <div className='outline'>{this.props.outline}</div>

        </div>


      </>
    );
  }
}
