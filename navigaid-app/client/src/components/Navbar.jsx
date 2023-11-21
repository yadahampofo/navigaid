import React from 'react';
import styled from 'styled-components';
import "../styles/main.css";
import "../styles/NavbarStyles.css";
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 50px;
`

// Create a Wrapper component that'll render an <div> tag with some styles
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Left side component 
const Left = styled.div`
  width: 60%;
  display: flex;
  align-center: center;
  justify-content: space-between;
`;

// Create a Logo component that'll render an <div> tag with some styles
const Logo = styled.h1`
  padding: 10px;
  font-weight: bold;
  text-decoration: underline crimson;
`

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px; 
  cursor: wait;
`;


// Use Wrapper like any other React Component - execept they are styled!
const Navbar = () => {
  // const navClick = (event) => {
  //   console.log("Nav Clicked")
  // }

//   const aboutClick = () => {
//     // Assuming you're using smooth scrolling to scroll to the "About" section
//     const aboutSection = document.getElementById("feature");

//     if (aboutSection) {
//         aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
// };

  // const featuresClick = (event) => {
  //   console.log("features Clicked")
  // }

  return (
    <Container>
        <Wrapper> 
          <Left>
            <Logo>Navigaid</Logo> 
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/assistance">Assistance</Link>
              <Link to="/service">Service</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            </Left>
          <Button>JOIN TODAY</Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar