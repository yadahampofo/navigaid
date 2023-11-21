import React from 'react';
import styled from 'styled-components';
import HealthInsurance from '../img/HealthInsurance.jpg'; //Import Image

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    @media only screen and (max-width : 480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 60%
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width : 480px){
        width: 100%;
        height: 100%;
    }

`;

const Right = styled.div`
    width: 98%
`;

const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    justify-content: center;
    @media only screen and (max-width : 480px){
       width: 100%;
       font-size: 50px;
    }

`;

const Description = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width : 480px){
        width: 100%;
     }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    justify-content: space-between;
    
`;



const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: darkblue;
    font-weight: bold;
    padding: 20px 30px; 
    
`;

const ContactText = styled.span`
    color: black;
    margin-top: 5px;
`;

// Create Image Component
const Image = styled.img`
    width: 40%;
    position: absolute;
    top: 20%;
    left: 65%;
`;

//Creating our Intro Functional component
const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>About Us</Title>
                <Description> 
                   March 31, 2023 marked the end of the Medicaid Continious Enrollment Process. 
                   As many State Health Departments begin the redetermination process, this website hopes to provide
                   automony back to civilians by ensuring that they are well informed of what is required to maintain their eligibility 
                   and avoid administrative errors which might compromise thier medicaid coverage.
                   Our website serves to be a helpful and client centered resource for everything medicaid-renrollment related.
                </Description>
            </Left>
            <Right><Image src={HealthInsurance}></Image></Right>
        </Container>
    )
}

export default Intro;