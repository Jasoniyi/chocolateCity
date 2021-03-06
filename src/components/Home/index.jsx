import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";

class index extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
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
                <Link to="/albums" className="nav-link">
                  Albums
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <div>
          <Carousel />
        </div>
        <Footer />
      </>
    );
  }
}

export default index;
