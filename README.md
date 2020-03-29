# Circular Fashion Movement

![P3 Challenge](https://imgur.com/FtLC03p.png)

<img src="https://github.com/JordisGithub/fashion-app/blob/master/src/Images/AdobeStock_239369226.png" width="900">

## Table of Contents

- [Project Description](#project-description)
  - [Project features](#project-team)
- [Wireframes](#wireframes)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
  - [Tablet](#tablet)
- [API](#api)
  - [API Details](#api-details)
- [Functional Goals](#project-review)
  - [MVP](#code-showcase)
  - [Post-MVP](#issues-&-resolutions)
- [Supporting Libraries](#project-review)
- [React Structure](#react-structure)
- [Component Breakdown](#component-breakdown)

<br>

# Overview

## Project Description

I want to build a sustainable fashion blog that includes information on sustainability in the fashion inustry.
This will include a realtime commenting feature to capture feedback and ideas from users visiting the site.

#### Project Features

Curated audience based content:

- Fast Fashion is #Cancelled - the real cost of cheap fast garments
- Sustainable Fashion brands we love
- Calculate your Fashion Footprint
- Fashion swaps are the new brunch
- Level up your Laundry game
- Rent your wardrobe

<br>
<br>

## Wireframes

#### Desktop

#### Mobile

#### Tablet

<br>

## API

API from Ably
Ably’s global realtime service enables Internet enabled devices, such as a browser, phone, server or IoT sensor, to stream data
in realtime between to any other Internet connected device in milliseconds. The Ably platform brings enterprise scale messaging to
developers by delivering a highly-available service, message delivery guarantees and low-latencies globally (typically less than 60ms).
How Ably works -> https://www.ably.io/documentation/how-ably-works

<br>
<br>

## Functional Goals

### MVP

- Comment feature using API
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

## React Structure

```
client

|___ public
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
