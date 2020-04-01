import React from "react";

const Elements = props => (
  <>
    <img className='mainImage' src={props.mainPicture} />
    <div className={props.outline}></div>

    <label for={props.label}>{props.label}</label>

    <textarea>
      title={props.title}
      blogSummary={props.blogSummary}
    </textarea>

  </>
);

export default Elements;


