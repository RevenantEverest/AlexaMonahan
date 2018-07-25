import React, { Component } from 'react';
import './Portfolio.css';

//Services Imports
import services from '../../services/apiServices';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      apiData: null,
      dataRecieved: false
    }
  }

  componentDidMount() {
    services.getBeautyImages()
      .then(results => {
        this.setState({ apiData: results.data.data, dataRecieved: true })
      })
      .catch(err => console.log("Failed at Get Facebook Photos => ", err));
  }

  renderImages() {
    let Images;
  }

  render() {
    return(
      <div className="Portfolio">
        {this.state.dataRecieved ? this.renderImages(): ''}
      </div>
    );
  }
};

export default Portfolio;
