# Barrel-Aged

![P3 Challenge](https://imgur.com/P0kiHOf.png)

<p style="text-align: center;"><em>P3 Challenge</em></p>

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

Barrel-Aged is a social forum and review website for whiskey lovers. Through a modern and attractive user interface, convenient browsing and review functionality, and a well-designed database of whiskeys, Barrel-Aged will enable whiskey consumers to discuss, rate, and find their next favorite bottle.

#### Project Team

Created, designed, and developed by [Brian Weitz](https://github.com/GuildensternDies), [Misha Kessler](https://github.com/mishakessler), [Naz Babu](https://github.com/n95babu), & [Sean Blanchfield](https://github.com/seanbfield) (Git Czar) for the GA Software Engineering Immersive (May '19 Cohort) Unit 3 Project.

Team values, communication preferences, and other group expectations can be found on the [Barrel-Aged google doc](https://docs.google.com/document/d/12Y6Uepqbnv3tS8xEpuS2KN-N3yHhyMqZA6CAT63p2YY/edit).

#### Project Inspiration

Barrel-Aged is modeled with functional inspiration from [Distiller](https://distiller.com/), [GoodReads](https://www.goodreads.com/), [Connosr](https://www.connosr.com/), and [Untappd](https://untappd.com); design and branding inspiration from [Flaviar](https://flaviar.com) and [Touch of Modern](https://www.touchofmodern.com).

#### Project Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](https://deathtothestockphoto.com/), [Freepik](https://www.freepik.com/home), and [Unsplash](https://unsplash.com/). Custom digital design and branding by [Misha Kessler](https://www.mishakessler.com).

Digital assets stored locally and on Imgur at [Barrel-Aged Assets Library](https://imgur.com/a/uF7o4YS).

<br>
<br>

# Design

## ERD Model

![ERD Model V2](https://imgur.com/D7NUsJb.png)

> ERD Model from Sean's [Draw.io](https://www.draw.io).

<br>

## Sitemap

V2
![Sitemap V2](https://imgur.com/wCQGVt7.png)

<p style="text-align: center;"><em>Sitemap V2</em></p>

> Sitemap from Naz's [GlooMap](https://www.gloomaps.com/sKZtWehfzJ).

<br>

## Wireframes

#### Desktop

![Age Gate Wireframe](https://imgur.com/Jg7ghQO.png)
![Home Wireframe](https://imgur.com/XngdLOl.png)
![Landing Wireframe](https://imgur.com/Yk2DLKf.png)
![User Dashboard Wireframe](https://imgur.com/Njt1euU.png)
![Whiskey Review Wireframe](https://imgur.com/0wNtEPS.png)
![Whiskey News Wireframe 1](https://imgur.com/oT2kzL8.png)
![Whiskey News Wireframe 2](https://imgur.com/Q3qhUvc.png)

#### Mobile

![Mobile Age Gate Wireframe](https://imgur.com/sn2SbP2.png)
![Mobile Home Wireframe](https://imgur.com/yFe3NH8.png)

> Wireframes from Brian's [DocDroid](https://www.docdroid.net/4njapHK/barrelaged.pdf).

<br>

## Branding

#### Logo & Wordmarks

![Logomark](https://imgur.com/lEgfC75.png)

<p style="text-align: center;"><em>Logomark</em></p>

![Wordmark Light](https://imgur.com/zpkxa4x.png)

<p style="text-align: center;"><em>Wordmark Light</em></p>

![Wordmark Dark](https://imgur.com/zTqQxx9.png)

<p style="text-align: center;"><em>Wordmark Dark</em></p>

#### Bottle Label Mockup

![Label](https://imgur.com/P0kiHOf.png)

<p style="text-align: center;"><em>Print Label</em></p>

![Bottle Mockup](https://imgur.com/nB8w4Xt.png)

<p style="text-align: center;"><em>Bottle Mockup</em></p>

<br>
<br>

# Development

## Functional Goals

### MVP

- User Authentication & Password Hashing
- Sequelize Resource Tables
  - Users (first_name, username, email, password, location, fav_whiskey)
    - FK: User hasMany Reviews, User hasMany Whiskeys
  - Whiskeys (name, brand, type, description, url_to_image)
    - FK: Whiskey hasMany Reviews
  - Reviews (rating, comment)
    - FK: Review belongsTo Users, Review belongsTo Whiskeys
- CRUD Functionality on All Resources via Axios
- Core React Components
  - Pages
    - Age Gate
    - Landing (Hero, Overview, Login, Register)
    - Homepage (_Index_)(View All Whiskies, Whiskies By Type)
    - User (_Show_)
    - Whiskey (_Show_)
  - Modules
    - Login Form
    - Register Form

### Post-MVP

- Pagination on Whiskeys, Advanced Sorting & Filtering
- Additional "Favorite" functionality, db table, and corresponding components for viewing and reordering favorite whiskeys from user dashboard.
- "Like" functionality on reviews, plus sorting reviews by popularity.
- Third party whiskey API to build out our database, enable "Add new whiskey for review." by user, with autofill.

<br>

## Functional Heirarchy

> Files and directories that are key to our production (and thus, have been- or will be- edited) are listed here in tree form here. Subdirectories should appear first, followed by filenames.

#### Repo Structure

```
barrel-aged

|___ client
      (Refer to React Structure below.)

|___ routes
      |___ userRouter.js
      |___ whiskeyRouter.js

|___ auth.js
|___ models.js
|___ resetDb.js
|___ scratch.js
|___ seed.js
|___ server.js

|___ readme.md
```

#### Express Database Structure

```
barrelaged_db

|___ reviews
|___ users
|___ whiskeys
```

#### React Structure

```
client

|___ public
      |___ favicon.ico
      |___ index.html

|___ src
      |___ assets
            |___ images
            |___ graphics

      |___ components
            |___ Header.jsx
            |___ LoginForm.jsx
            |___ RegisterForm.jsx
            |___ ReviewForm.jsx
            |___ Footer.jsx

      |___ pages
            |___ AgeGate.jsx
            |___ Landing.jsx
            |___ Home.jsx
            |___ User.jsx
            |___ Whiskey.jsx

      |___ services
            |___ api-helper.js

      |___ App.css
      |___ App.js
      |___ index.css
      |___ index.js
      |___ logo.svg

|___ readme.md
```

<br>

## Functional Components

#### Component Breakdown

> Components (and a description with a stateful or stateless tag) go here.

| Component   |   State   |                                               Description                                               |
| ----------- | :-------: | :-----------------------------------------------------------------------------------------------------: |
| Lorem ipsum | Stateless | Lorem ipsum dolor sit amet, consecteteur adupiscing elit, sed do eiusmod tempor incididunt ut labore... |

#### Component Timeframes

> Time expectation (padded with an extra hour, minimum, to play it safe) go here.

| Component   | Priority | Estimated Time | Actual Time |
| ----------- | :------: | :------------: | :---------: |
| Lorem ipsum |   High   |     x hrs      |    y hrs    |

#### Helper Functions

> Generic helper functions go here.

| Function |     Description      |
| -------- | :------------------: |
| Lorem    | ipsum dolor sit amet |

<br>

## Supporting Libraries

> Packages installed via node go here.

- Server-Side

  - body-parser
  - cors
  - express
  - morgan
  - nodemon
  - pg
  - sequelize

- Authentication

  - bcrypt
  - jsonwebtoken

- Client-Side
  - axios
  - material-ui
  - react
  - react-router-dom
  - react-spring
  - react-with-gesture
  - react-star-rating

<br>
<br>

# Project Review

## Code Showcase

> Any code of which we are proud go here.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

<br>

## Issues & Resolutions

> Any code bugs, errors, and fixes go here.

```
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
```

```
**RESOLUTION**: Missing comma after first object in sources {} object
```

<br>
<br>

# Project Followup

> Any tasks we would like to revisit after graduation go here.

<a href="http://fvcproductions.com"><img src="https://avatars1.githubusercontent.com/u/4284691?v=3&s=200" title="FVCproductions" alt="FVCproductions"></a>

<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->

**_INSERT GRAPHIC HERE (include hyperlink in image)_**

# Repository Title Goes Here

> Subtitle or Short Description Goes Here

> ideally one sentence

> include terms/tags that can be searched

**Badges will go here**

- build status
- issues (waffle.io maybe)
- devDependencies
- npm package
- coverage
- slack
- downloads
- gitter chat
- license
- etc.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)

- For more on these wonderful ~~badgers~~ badges, refer to <a href="http://badges.github.io/badgerbadgerbadger/" target="_blank">`badgerbadgerbadger`</a>.

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
