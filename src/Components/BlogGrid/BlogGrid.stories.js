import React from "react";
import { storiesOf } from "@storybook/react";
import "./BlogGrid.css";

import blogPicture from '../../Images/Reformation.png'
import blogPicture2 from '../../Images/Stella-Mccarthy.png'
import blogPicture3 from '../../Images/Pour-Les-Femmes.png'
import blogPicture4 from '../../Images/Gabriela-Hearst.png'
import BlogGrid from "./BlogGrid.js";

storiesOf("Brand Articles", module)

  .add("Blog Grid", () => (
    <BlogGrid
      blogPicture={blogPicture}
      title={'Reformation'}

      blogPicture2={blogPicture2}
      title2={'Stella Mccarthy'}

      blogPicture3={blogPicture3}
      title3={'Pour Les Femmes'}

      blogPicture4={blogPicture4}
      title4={'Gabriela Hearst'}
    />
  ))

