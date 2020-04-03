import React from "react";
import { storiesOf } from "@storybook/react";

import FeauturedBlog from "./FeauturedBlog.js";
import "./FeauturedBlog.css";
import mainPicture from '../../Images/Fast-Fashion-Cancelled.png'

storiesOf("Industry Articles", module)
  .add("Feautured Blog", () => (
    <FeauturedBlog
      title={'FAST FASHION'}
      tag={'IS #CANCELLED'}
      mainPicture={mainPicture}
      blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
      outline="" />

  ))




