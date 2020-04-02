import React from "react";
import { storiesOf } from "@storybook/react";

import FeauturedBlog from "./FeauturedBlog.js";
import "./FeauturedBlog.css";
import mainPicture from '../../Images/Fast-Fashion-Cancelled.png'

storiesOf("Industry Articles", module)
  .add("Feautured Blog", () => (
    <FeauturedBlog
      mainPicture={mainPicture}
      title={'test'}
      blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
      type="outline" />

  ))




