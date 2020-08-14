import React, { Component } from "react";
import Button from '../Button/Button'
import './FeaturedBrands.css'


export default class FeaturedBrands extends Component {
  render() {
    return (
      <>
        <div className='FeaturedBrands-wrapper'>

          <div className='blogGridTitle'>
            <h1>Sustainable Brands we Love</h1>
            <h2>#Sustainablefashionista</h2>
            <div className='blogGridTitleHighlight'></div>
          </div>

          <div className='blogGrid'>
            {/* ============================
            ============Item1===========
            ============================ */}
            <div className='indBlogGrid'>
              <img className='blogImage' src={this.props.blogPicture} />
              <h1>{this.props.title}</h1>
            </div>
            {/* ============================
            ============Item2===========
            ============================*/}
            <div className='indBlogGrid'>
              <img className='blogImage' src={this.props.blogPicture2} />
              <h1>{this.props.title2}</h1>
            </div>
            {/* ============================
            ============Item3===========
            ============================*/}
            <div className='indBlogGrid'>
              <img className='blogImage' src={this.props.blogPicture3} />
              <h1>{this.props.title3}</h1>
            </div >
            {/* ============================
            ============Item4===========
            ============================*/}
            <div className='indBlogGrid'>
              <img className='blogImage' src={this.props.blogPicture4} />
              <h1>{this.props.title4}</h1>
            </div>
          </div>

        </div>

        {/* <div className='buttonDiv'>
          <Button label="See More" type="primary" />
        </div> */}
      </>
    )
  }
}