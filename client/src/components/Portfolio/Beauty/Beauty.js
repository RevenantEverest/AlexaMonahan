import React, { Component } from 'react';
import './Beauty.css';

//Services Imports
import services from '../../../services/apiServices'

class Beauty extends Component {

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
      .catch(err => console.log("Failed at Get Beauty Images => ", err));
  }

  selectImage(el) {
    this.setState({ selectedImage: el.link }, () => this.openModal());
  }

  openModal() {
  let modal = document.querySelector('.simpleModal');
  modal.style.display = "block";
  this.setState({
    modalOpen: true
  })
}

closeModal() {
  this.componentDidMount();

  let modal = document.querySelector('.simpleModal');
  modal.style.display = "none";
  this.setState({
    modalOpen: false
  })
}

  renderImages() {
    let counter = 0;
    let Images = this.state.apiData.images.map((el, idx) => {
      if(counter === this.state.apiData.images.length - 1) return;
      counter++;
      return(
        <img className="Beauty-images" src={el.link} alt="" key={idx} onClick={(e) => this.selectImage(el)} />
      );
    });

    return(
      <div className="Beauty-row">
        {Images}
      </div>
    );
  }

  render() {
    return(
      <div className="Beauty">
        <div className="Beauty-BG">
          <h1 className="Beauty-header">Beauty Makeup</h1>
          {this.state.dataRecieved ? this.renderImages() : <div className="loading" />}
          <div className="simpleModal">
            <div className="modalContent">
              <span className="closeButton" onClick={(e) => this.closeModal()}>&times;</span>
              <img className="Selected-Image-Beauty" src={this.state.selectedImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Beauty;
