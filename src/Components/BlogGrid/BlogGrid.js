import React from "react";

const BlogGrid = props => (
  <>
    <div className='blogGrid'>
      <h1>{props.title}</h1>
      <img className='mainImage' src={props.mainPicture} />
      <p>{props.blogSummary}</p>
      <div className={props.outline}></div>
    </div>

  </>
);

export default BlogGrid;