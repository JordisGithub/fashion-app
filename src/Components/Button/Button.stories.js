import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  // .add("Primary", () => <Button label="Primary" style={style} />)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary Hover ", () => <Button label="Primary" type="primary-hover" />)
  .add("Primary Outline", () => <Button label="Primary" type="primary-outline" />)