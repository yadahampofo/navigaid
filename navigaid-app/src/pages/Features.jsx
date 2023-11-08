import React from 'react'
import styled from "styled-components";
import search from "../img/search.png";

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display:flex; 
    flex-direction: column; 
    box-shadow: 0px 5px 12px 0px rgba(84,142,255,0.75);
    -webkit-box-shadow: 0px 5px 12px 0px rgba(84,142,255,0.75);
`;

const Image = styled.img`
    width: 40px;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
`;

const Text = styled.span`
    justify-content: center;
`;

const Features = () => {
  return (
    <Container>
    </Container>
  );
};

export default Features;
