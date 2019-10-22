import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBRow,
  MDBCol,
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
 
} from "mdbreact";

import { Link } from "react-router-dom";

// import Footer from "./Footer";

class index extends Component {
  state = {
    isOpen: false,
    isLoading: true,
    activeAlbums: []
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/albums";

    fetch(url)
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          isLoading: false,
          activeAlbums: data
        })
      );
  }

  getalbums = () => 
  this.state.getalbums.map(album => (
      
  ))
  
    
      
  

  render() {
    return (
      <>
        <MDBNavbar color="black" dark expand="md" className="header">
          <MDBNavbarBrand>
            {/* <strong className="white-text">Navbar</strong> */}
            <img
              src="http://chocolatecitygroup.com/wp-content/uploads/2017/07/Chocolate_City_Logo_212-e1501242804870.png"
              alt="logo"
              className="img-fluid p-3"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right color="black">
              <MDBNavItem active>
                <Link to="/artists" className="nav-link">
                  Artists
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="#" className="nav-link">
                  Albums
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <div>
          {!this.state.isLoading ? (
            <MDBRow>
                {this.getalbums()}
            </MDBRow>
          ) : (
            <h1> loading</h1>
          )}
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default index;
