import React, { Component } from "react";
import './FeauturedBlog.css'

export default class FeauturedBlog extends Component {
  render() {
    return (
      <>
        <div className='gridHeadingDivider'>
          <div className='textDivider featureb-blog-textdivider'>Your Sustainable Fashion Resource</div>
          <div className='textDividertag'>Geek out with us</div>
        </div>

        {/* ========================================
            ===============Item 1===================
          ========================================== */}
        <div className="featured-blog-section ">

          <div className="individual-blog-wrapper ">
            <div className='featuredBlogContainer'>
              <img className='mainImage' src={this.props.mainPicture} />
              <div className='outline'>{this.props.outline}</div>
              <div className='featuredBlogTitle'> {this.props.title}</div>
              <div className='blogSummary'> {this.props.blogSummary} </div>
            </div>
          </div>
          {/* ========================================
            ===============Item 2===================
          ========================================== */}
          <div className="individual-blog-wrapper ">
            <div className='featuredBlogContainer2'>
              <img className='mainImage2' src={this.props.mainPicture2} />
              <div className='outline2'>{this.props.outline2}</div>
              <div className='featuredBlogTitle2'> {this.props.title2}</div>
              <div className='blogSummary2'> {this.props.blogSummary2} </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
