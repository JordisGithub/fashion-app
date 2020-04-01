import React from "react";
import { storiesOf } from "@storybook/react";
import Elements from "./Elements.js";
import "./Elements.css";

import mainPicture from '../../Images/Fast-Fashion-Cancelled.jpeg'


storiesOf("Elements", module)
  .add("Featured Articles", () => (
    <Elements
      mainPicture={mainPicture}
    />
  ))




