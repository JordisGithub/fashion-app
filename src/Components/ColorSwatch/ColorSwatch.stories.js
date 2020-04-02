import React from "react";
import { storiesOf } from "@storybook/react";

import ColorSwatch from "./ColorSwatch";
import "./ColorSwatch.css";

storiesOf("Color Swatches", module)
  .add("Beige Swatch", () => <ColorSwatch label="#F9CFBC" type="beigeSwatch" />)
  .add("Pink Swatch", () => <ColorSwatch label="#FAE8EB" type="pinkSwatch" />)
  .add("Green Swatch", () => <ColorSwatch label="#306B34" type="greenSwatch" />)
  .add("Dark Green Swatch", () => <ColorSwatch label="#19381F" type="darkgreenSwatch" />)
  .add("Darkest Green Swatch", () => <ColorSwatch label="#36413E" type="darkestgreenSwatch" />)
  .add("Gray Swatch", () => <ColorSwatch label="#707070" type="graySwatch" />)
  .add("Dark Brown Swatch", () => <ColorSwatch label="#81624E" type="darkbrownSwatch" />)
  .add("Light Brown Swatch", () => <ColorSwatch label="#B6967D" type="lightbrownSwatch" />)



