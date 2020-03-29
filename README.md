# Circular Fashion Movement

![P3 Challenge](https://imgur.com/P0kiHOf.png)

<p style="text-align: center;"><em>P2 Challenge</em></p>

## Table of Contents

- [Project Description](#project-description)
  - [Project Team](#project-team)
  - [Project Inspiration](#project-inspiration)
  - [Project Permissions](#project-permissions)
- [Design](#design)
  - [Sitemap](#sitemap)
  - [Wireframes](#wireframes)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
  - [Branding](#branding)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
    - [Database Table Structure](#express-database-structure)
    - [React Structure](#react-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

<br>
<br>

# Overview

![Logo](https://imgur.com/lEgfC75.png)

## Project Description

I want to build a sustainable fashion blog that includes information on sustainability in the fashion inustry.
This will include a realtime commenting feature to capture feedback and ideas from users visiting the site.

#### Project Features

Curated audience based contect:

- Sustainable Fashion brands we love
- Calculate your Fashion Footprint
- Reduce your fashion waste - Swaps
- Level up your Laundry game
- Your old clothes - locate a clothing donation/recylcling center near you
- Rent your wardrobe
- Fast Fashion is #Cancelled - the real cost of cheap fast garments

#### Project Permissions

Digital assets used with full licensing and permission from AdobeStock.

<br>
<br>

## Wireframes

#### Desktop

![Age Gate Wireframe](https://imgur.com/Jg7ghQO.png)
![Home Wireframe](https://imgur.com/XngdLOl.png)

#### Mobile

![Mobile Age Gate Wireframe](https://imgur.com/sn2SbP2.png)
![Mobile Home Wireframe](https://imgur.com/yFe3NH8.png)

<br>

## API

#### Logo & Wordmarks

API from Ably
Ably’s global realtime service enables Internet enabled devices, such as a browser, phone, server or IoT sensor, to stream data
in realtime between to any other Internet connected device in milliseconds. The Ably platform brings enterprise scale messaging to
developers by delivering a highly-available service, message delivery guarantees and low-latencies globally (typically less than 60ms).
How Ably works -> https://www.ably.io/documentation/how-ably-works

<br>
<br>

# Development

## Functional Goals

### MVP

- Pages

  - Homepage (_footer_)(\_header)
  - Age Gate
  - Landing (Hero, Overview, Login, Register)
  - User (_Show_)
  - Whiskey (_Show_)

- Design
  - CSS Grid.
  - Implement responsive design on 3 screen sizes (including desktop, tablet and mobile).
  - Utilize Storybook to create at least 5 reusable components, which are then used in your project;

### Post-MVP

- Write more blogs

<br>

## Supporting Libraries

- Client-Side
  - axios
  - components
  - react
  - react-dom
  - react-router
  - react-router-dom
  - react-scripts
  - styled

<br>
<br>

#### React Structure

```
client

|___ public
      |___ favicon.ico
      |___ index.html

|___ src
      |___ Images
            |___ images
            |___ graphics

      |___ components
            |___ Header.js
            |___ CommentBox.js
            |___ Comment.js
            |___ Comments.js
            |___ Footer.js
            |___ Blog.js

      |___ pages
            |___ Home Page
            |___ Indv Blog Page


      |___ App.css
      |___ App.js
      |___ index.css
      |___ index.js
      |___ logo.tiff

|___ readme.md
```

<br>

## Components

> Generic helper functions go here.

| Component  | State/Prop |                                Description                                 |
| ---------- | :--------: | :------------------------------------------------------------------------: |
| CommentBox |   props    |                        Holds comment Box properties                        |
| Comment    |   props    | This component renders a single comment. It accepts the comment as props.  |
| Comments   |   props    | This component accepts a comments props and renders the Comment component. |
| App        |   State    |  Adds the comment that was made to state to update comments in realtime.   |
| Header     |            |                        Holds comment Box properties                        |
| Footer     |            |                        Holds comment Box properties                        |
| Blog       |   props    |          This component will be built for the individual artices           |

<br>

**_INSERT ANOTHER GRAPHIC HERE_**

[![INSERT YOUR GRAPHIC HERE](http://i.imgur.com/dt8AUb6.png)]()

- Most people will glance at your `README`, _maybe_ star it, and leave
- Ergo, people should understand instantly what your project is about based on your repo

> Tips

- HAVE WHITE SPACE
- MAKE IT PRETTY
- GIFS ARE REALLY COOL

> GIF Tools

- Use <a href="http://recordit.co/" target="_blank">**Recordit**</a> to create quicks screencasts of your desktop and export them as `GIF`s.
- For terminal sessions, there's <a href="https://github.com/chjj/ttystudio" target="_blank">**ttystudio**</a> which also supports exporting `GIF`s.

**Recordit**

![Recordit GIF](http://g.recordit.co/iLN6A0vSD8.gif)

**ttystudio**

![ttystudio GIF](https://raw.githubusercontent.com/chjj/ttystudio/master/img/example.gif)

---

## Table of Contents (Optional)

> If your `README` has a lot of info, section headers might be nice.

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Example (Optional)

```javascript
// code away!

let generateProject = project => {
  let code = [];
  for (let js = 0; js < project.length; js++) {
    code.push(js);
  }
};
```

---

## Installation

- All the `code` required to get started
- Images of what it should look like

### Clone

- Clone this repo to your local machine using `https://github.com/fvcproductions/SOMEREPO`

### Setup

- If you want more syntax highlighting, format your code like this:

> update and install this package first

```shell
$ brew update
$ brew install fvcproductions
```

> now install npm and bower packages

```shell
$ npm install
$ bower install
```

- For all the possible languages that support syntax highlithing on GitHub (which is basically all of them), refer <a href="https://github.com/github/linguist/blob/master/lib/linguist/languages.yml" target="_blank">here</a>.

---

## Features

## Usage (Optional)

## Documentation (Optional)

## Tests (Optional)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Team

> Or Contributors/People

|                 <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                 |                 <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                 |                 <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a>                 |
| :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) |
|         <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>         |         <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>         |         <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a>         |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---
