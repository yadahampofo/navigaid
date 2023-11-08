import {React, useState} from 'react';
import styled from 'styled-components';
import how from '../img/how.jpg'; //Import Image
import { MiniCard } from './MiniCard';
import play from '../img/play.jpg'; //Import Image
import video from '../video/video.mp4'; //Import Video

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 30%;
    margin-right: 30%;
    position: relative;
`;

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 40%;
`;

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 60%;
    position: absolute; 
    bottom: 0%;
    margin-left: 10%;
    margin-top; 20%
    margin-right: 15%
`;

const Right = styled.div`
    width: 80% 
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    width: 100%;
    font-size: 60px;
    justify-content: center;
    
`;

const Description = styled.p`
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none; 
    border-radius: 10px; 
    background-color: darkblue; 
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 20px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

export const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
        <Left>
            <Image open={open} src={how}></Image>
            <Video open={open} autoPlay loop controls src={video}></Video>
        </Left>
        <Right>
        <Wrapper>
            <Title>
              Simple Process to Start 
            </Title>
            <Description>Our AI Chatbot Coming soon for quick and easy translation and search! </Description>
            <CardContainer>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </CardContainer>
            <Button onClick= {() => setOpen(true)}>
                <Icon src={play}/>
                How it works
            </Button>
        </Wrapper>
        </Right>
        </Container>
  )
}

export default Service;