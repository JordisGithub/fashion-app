import axios from "axios"
import React, { Component } from 'react'
import "./App.css";

class FashionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fashionlist: null
    };
  }

  componentDidMount = async () => {
    const apiKey = "uid2449-43257857-69";
    const listUrl = "https://ssc.shopstyle.com/collective.min.js";
    axios
      .get(`${listUrl}&api_key=${apiKey}`)
      .then(resp => {
        let fashionObject = resp.data.data;
        this.setState({
          fashionlist: fashionObject
        });
      })
      .catch(error => {
        console.log(error);
      });

  }
}
export default FashionList