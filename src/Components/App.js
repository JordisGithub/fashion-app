import React, { Component } from 'react';
// import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import '../Components/App.css'

//Static components
import Nav from './Nav/Nav'
import HeroSection from './HeroSection/HeroSection'
import FeauturedBlog from './FeaturedBlog/FeauturedBlog'



import Footer from '../Components/Footer/Footer'

//pages
import Contact from "./Pages/Contact";


// Comment Box
import CommentBox from '../Components/Comments/CommentBox';
import Comments from '../Components/Comments/Comments';

// Blog Grid 
import BlogGrid from './BlogGrid/BlogGrid'
import './BlogGrid/BlogGrid.css'


//Images
import mainPicture from '../Images/Fast-Fashion-Cancelled.png'
import brunchPicture from '../Images/Fashion-Brunch.png'
import blogPicture from '../Images/Reformation.png'
import blogPicture2 from '../Images/Stella-Mccarthy.png'
import blogPicture3 from '../Images/Pour-Les-Femmes.png'
import blogPicture4 from '../Images/Gabriela-Hearst.png'





class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    /* global Ably */
    const channel = Ably.channels.get('comments');

    channel.attach();
    channel.once('attached', () => {
      channel.history((err, page) => {
        /* create a new array with comments */
        const comments = Array.from(page.items, item => item.data);

        this.setState({ comments });

        /* subscribe to new comments */
        channel.subscribe((msg, err) => {
          const commentObject = msg['data'];
          this.handleAddComment(commentObject);
        });
      });
    });
  }


  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  }



  render() {
    return (
      <section className="section">


        <Nav />
        <HeroSection />
        <FeauturedBlog
          mainPicture={mainPicture}
          outline=""
          title={'FAST FASHION IS #CANCELLED'}
          blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          mainPicture2={brunchPicture}
          outline2=""
          title2={'FASHION SWAPS ARE THE NEW BRUCH'}
          blogSummary2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        />



        <div className='blogGrid'>
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
        </div>




        <div className="container">
          <div className="columns">

            <CommentBox handleAddComment={this.handleAddComment} />
            <Comments comments={this.state.comments} />

          </div>
        </div>

        <Footer />

      </section >
    );
  }
}

export default App;


//API Comments code per Ably documentation 