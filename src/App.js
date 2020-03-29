import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import Fashion from './Fashion'

// import ShopStyleApi from shopstyle_api.api

// client = ShopStyleApi(api_key = "uid2449-43257857-69", api_username = "jordi515")
{/* <script
  async type="text/javascript"
  src="https://ssc.shopstyle.com/collective.min.js"
  data-sc-apikey="uid2449-43257857-69">
  </script> */}
// api_username = "jordi515"

class App extends Component {
  constructor() {
    super()
    this.state = {
      fashionData: []
    }
  }
  // const response = await axios("http://api.shopstyle.com/action/apiSearch?pid=uid2449-43257857-69")
  componentDidMount = async () => {
    const response = await axios("http://api.shopstyle.com/api/v2/json?pid=uid2449-43257857-69")

    this.setState({
      fashionData: response.data
    })
  }

  render() {
    return (
      <div>
        <h1>App is working</h1>
        <h1>{this.state.fashionData.map((fashion, idx) =>
          <Fashion key={idx} name={fashion.name} />)}
          <Fashion />

        </h1>
      </div>
    )
  }
}

export default App;