import React, { Component } from "react";

export default class FeauturedBlog2 extends Component {
  render() {
    return (
      <>
        <div className='featuredBlogContainer2'>

          <img className='mainImage2' src={this.props.mainPicture2} />
          <div className='outline2'>{this.props.outline2}</div>
          <div className='featuredBlogTitle2'> {this.props.title2}</div>
          <div className='blogSummary2'> {this.props.blogSummary2} </div>

        </div>


      </>
    );
  }
}