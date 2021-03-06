# Sustainable Fashion Movement

<img src="https://github.com/JordisGithub/fashion-app/blob/master/src/Images/readmeCover.png" width="900">

Demo: https://sustainablefashionnetwork.com/

## Table of Contents

- [Project Description](#project-description)
  - [Project features](#project-feautures)
- [Wireframes](#wireframes)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
  - [Tablet](#tablet)
- [API](#api)
  - [API Details](#api-details)
- [Functional Goals](#functional-goals)
  - [MVP](#mvp)
  - [Post-MVP](#post-mvp)
- [Supporting Libraries](#supporting-libraries)
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

Used Free Adobe XD UI Kit for Blogs & Media Sites by: Keshia M. White

<img src="https://github.com/JordisGithub/fashion-app/blob/master/src/Images/Wireframe.png" width="700">
<br>
<br>

## StoryBook Elements

<img src="https://github.com/JordisGithub/fashion-app/blob/master/src/Images/UI%20Elements.png" width="700">

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
  - react
  - react components
  - react-dom
  - react-router
  - react-router-dom
  - react-scripts
  - styled components
  - Storybook
  - ably

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

| Component  | State/Prop |                                                                                                                                                                                                             Description                                                                                                                                                                                                              |
| ---------- | :--------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| CommentBox |   props    |                                                                                                                                             This component renders a comment form. Once the form is submitted, we trigger an onSubmit event which in turn calls addComment().properties                                                                                                                                              |
| Comment    |   props    |                                                                                                                                        This component renders a single comment. It accepts the comment as props. Props are custom attributes that are used to pass input data to components.                                                                                                                                         |
| Comments   |   props    |                                                                                                                            This component accepts a comments props and renders the Comment component for each of the comments available. It passes the actual comment to the Comment component as props.                                                                                                                             |
| App        |   State    | The App component will serve as the parent component. The App component will contain other components which will be nested within it. We define a comments state which is an array of comments. It defaults to an empty array. This will be updated as we add comment through the comment form. Also, we pass the comments state as props to the Comments component. This is how the Comments component get the comments it renders. |
| Header     |            |                                                                                                                                                                                                     Holds comment Box properties                                                                                                                                                                                                     |
| Footer     |            |                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Blog       |            |                                                                                                                                                                                                                                                                                                                                                                                                                                      |

<br>
