import React, { Component } from 'react';
import { Route, NavLink, HashRouter, Link } from "react-router-dom";

//Static components
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../Components/App.css'

//pages
import Contact from "./Pages/Contact";


// Comment Box
import CommentBox from '../Components/Comments/CommentBox';
import Comments from '../Components/Comments/Comments';

// Blog Grid 
import BlogGrid from './BlogGrid/BlogGrid'
import './BlogGrid/BlogGrid.css'
import blogPicture from '../Images/Reformation.png'
import blogPicture2 from '../Images/Stella-Mccarthy.png'
import blogPicture3 from '../Images/Pour-Les-Femmes.png'
import blogPicture4 from '../Images/Gabriela-Hearst.png'

// Featured Blog
import FeauturedBlog from '../Components/IndustryArticles/FeauturedBlog'
import '../Components/IndustryArticles/FeauturedBlog.css'
import mainPicture from '../Images/Fast-Fashion-Cancelled.png'

//Main Img
import main from '../Images/MainImage.png'





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


        <Header />

        <div className='featuredSection'>
          <div className='title'>Sustainable Fashion Movement</div>
          <div className='underline'></div>
          <div className='headerOutline'></div>
          <img src={main} />
        </div>


        <div className='textDivider'>Your Sustainable Fashion Resource</div>
        <span className='textDividertag'>Geek out with us</span>
        {/* <div className='textDividerHighlight'></div> */}


        <div className='featuredBlog'>
          <FeauturedBlog
            title={'FAST FASHION'}
            tag={'IS #CANCELLED'}
            mainPicture={mainPicture}
            blogSummary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
            outline="" />




          <div className='blogGrid'></div>
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
            <div className="column is-half is-offset-one-quarter">
              <CommentBox handleAddComment={this.handleAddComment} />
              <Comments comments={this.state.comments} />
            </div>
          </div>
        </div>

        <Footer />

      </section>
    );
  }
}

export default App;