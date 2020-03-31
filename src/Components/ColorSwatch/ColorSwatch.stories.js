import React from "react";
import { storiesOf } from "@storybook/react";

import ColorSwatch from "./ColorSwatch";
import "./ColorSwatch.css";

storiesOf("Color Swatches", module)
  .add("Beige Swatch", () => <ColorSwatch label="Beige" type="beigeSwatch" />)
  .add("Pink Swatch", () => <ColorSwatch label="Pink" type="pinkSwatch" />)
  .add("Green Swatch", () => <ColorSwatch label="Green" type="greenSwatch" />)
  .add("Dark Green Swatch", () => <ColorSwatch label="Dark-Green" type="darkgreenSwatch" />)
  .add("Darkest Green Swatch", () => <ColorSwatch label="Darkest-Green" type="darkestgreenSwatch" />)
  .add("Gray Swatch", () => <ColorSwatch label="Gray" type="graySwatch" />)
  .add("Dark Brown Swatch", () => <ColorSwatch label="Dark-Brown" type="darkbrownSwatch" />)
  .add("Light Brown Swatch", () => <ColorSwatch label="Light-Brown" type="lightbrownSwatch" />)



