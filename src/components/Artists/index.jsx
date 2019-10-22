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
  MDBContainer,
  MDBJumbotron,
  MDBBtn
} from "mdbreact";

import ArtistCard from "./Card";
import { Link } from "react-router-dom";

// import Footer from "./Footer";

class index extends Component {
  state = {
    isOpen: false,
    isLoading: true,
    activeArtists: []
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  //   getArtists = () => {
  //     const url = "https://jsonplaceholder.typicode.com/users";

  //     fetch(url)
  //       .then(responce => responce.json())
  //       .then(artists => console.log(artists));
  //   };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          isLoading: false,
          activeArtists: data
        })
      );
  }

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
            this.state.activeArtists.map(artists => (
              <MDBContainer className="mt-5 text-center">
                <MDBRow md="6">
                  <MDBCol>
                    <MDBJumbotron>
                      <h2 className="h1 display-3">{artists.name}</h2>
                      <p className="lead">{artists.company.catchPhrase}</p>
                      <hr className="my-2" />
                      <p>
                        ` You can get me at {artists.address.street}, my city is{" "}
                        {artists.address.city} and you can call me on
                        {artists.phone}`. Visit my website at {artists.website}
                      </p>
                      <p className="lead">
                        <MDBBtn color="primary">Learn More</MDBBtn>
                      </p>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            ))
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
