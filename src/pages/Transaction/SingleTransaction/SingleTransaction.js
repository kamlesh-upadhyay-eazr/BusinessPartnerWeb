import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
class SingleTransaction extends Component {
  render() {
    
    return (
      <div className="page-content">
        <Loader
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          type="ThreeDots"
          color="#FFF"
          height={70}
          width={70}
          timeout={500} //3 secs
        />
        <h3>SingleTransaction</h3>
      </div>
    );
  }
}

export default SingleTransaction;
