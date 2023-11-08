import React from 'react';
import styled from 'styled-components';
import familyphoto from '../img/familyphoto.jpeg'; //Import Image
import AnimatedShapes from './AnimatedShapes';

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
    width: 55%
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

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white; 
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px; 
    cursor: pointer;
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
                <Title> Helping you Navigate Medicaid</Title>
                <Description> 
                    Thousands of Americans constantly struggle to understand the 
                    Medicaid Eligibility and Enrollment Process. 
                    This website hopes to make the process 
                    a bit easier. 
                    </Description>
                    <Info>
                        <Button>OUR RESOURCES</Button>
                        <Contact>
                            <Phone>Call Us (012) 345 - 6789</Phone>
                            <ContactText>For any questions or concerns</ContactText>
                        </Contact>
                    </Info>
            </Left>
            <Right><Image src={familyphoto}></Image></Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Intro;