import React from 'react'
import styled from 'styled-components';
import phone from '../img/phone.jpeg'; //Import Phone Image

const Container = styled.div`
    display: flex;
    @media only screen and (max-width : 480px){
        flex-direction: column;
     }
`;

const Left = styled.div`
    width: 90%;
    @media only screen and (max-width : 480px){
        display: none;
     }
`;
const Right = styled.div`
    width: 50%
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const Title = styled.span`
    display: 'flex',
    flexDirection: 'column',
    padding 15px 20px;
    margin-top: 30px;
    font-size: 70px;
`

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 150px;
    border: none;
    padding 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 88%
`;


export const Feature = () => {
  return (
    <div className='feature' id='feature'>
    <Container>
        <Left>
            <Image src={phone}/>
        </Left>
      <Right>
        <Title>
            <br />
            <b>good</b> design 
            <br />
            <b>good</b> business
        </Title>
        <Desc>6.8 Million Americans are at risk of medicaid coverage losses due to adminsitrative errors in 
              form submissions and a lack of information about what is required to maintain Medicaid eligibility.
              This website hopes to make the process a bit easier.
              </Desc>
        <Desc>Information is very key to your sucess and we hope to be your guide</Desc>
        <Button>Learn More</Button>
      </Right>
    </Container>
    </div>
  )
}

export default Feature;
