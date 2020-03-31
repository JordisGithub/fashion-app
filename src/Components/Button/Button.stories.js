import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  // .add("Primary", () => <Button label="Primary" style={style} />)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary Hover ", () => <Button label="Primary" type="primary-hover" />)
  .add("Primary Outline", () => <Button label="Primary" type="primary-outline" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success Hover", () => <Button label="Success" type="success-hover" />)
  .add("Success Outline", () => <Button label="Success" type="success-outline" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger Hover", () => <Button label="Danger" type="danger-hover" />)
  .add("Danger Outline", () => <Button label="Danger" type="danger-outline" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning Hover", () => <Button label="Warning" type="warning-hover" />)
  .add("Warning Outline", () => <Button label="Warning" type="warning-outline" />)