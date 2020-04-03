import React, { Component } from "react";

export default class FeauturedBlog extends Component {
  render() {
    return (
      <>
        <div className='featuredBlogContainer'>

          <img className='mainImage' src={this.props.mainPicture} />
          <div className='outline'>{this.props.outline}</div>
          <div className='featuredBlogTitle'> {this.props.title}</div>
          <div className='blogSummary'> {this.props.blogSummary} </div>
          {/* <div className='tag'> {this.props.tag}</div> */}

        </div>


      </>
    );
  }
}
