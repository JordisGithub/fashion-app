import React, { Component } from "react";

export default class FeauturedBlog2 extends Component {
  render() {
    return (
      <>
        <div className='featuredBlogContainer2'>

          <img className='mainImage' src={this.props.mainPicture2} />
          <div className='outline'>{this.props.outline2}</div>
          <div className='featuredBlogTitle'> {this.props.title2}</div>
          <div className='blogSummary'> {this.props.blogSummary2} </div>

        </div>


      </>
    );
  }
}
