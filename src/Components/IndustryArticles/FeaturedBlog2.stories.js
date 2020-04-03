import React from "react";
import { storiesOf } from "@storybook/react";

import FeauturedBlog from "./FeauturedBlog.js";
import "./FeauturedBlog.css";
import mainPicture from '../../Images/Fast-Fashion-Cancelled.png'

import FeauturedBlog2 from "./FeaturedBlog2";
import "./FeaturedBlog2.css";
import brunchPicture from '../../Images/Fashion-Brunch.png'

storiesOf("Industry Articles", module)
  .add("Feautured Blog-Right", () => (
    <FeauturedBlog2

      mainPicture2={brunchPicture}
      outline2=""
      title2={'FASHION SWAPS ARE THE NEW BRUCH'}
      blogSummary2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    />


  ))

  .add("Feautured Blog-Left", () => (
    <FeauturedBlog
      mainPicture={mainPicture}
      outline=""
      title={'FAST FASHION IS #CANCELLED'}
      blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
    />

  )
  )
