import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  padding: 30px;
  box-shadow: 0px 5px 12px 0px rgba(84,142,255,0.58);
  -webkit-box-shadow: 0px 5px 12px 0px rgba(84,142,255,0.58);
  background-color: white; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0; 
  border: 1.5px solid crimson; 
  color: crimson;
  background-color: white; 
  border-radius: 20px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0; 
`;

const Button = styled.button`
  border: none; 
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: 
  padding: 15px;
  border-radius: 10px; 
  cursor: pointer;
`;

export const PriceCard = ({price, type}) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>Excel sheets for organization</ListItem>
                <ListItem>Step by step breakdown</ListItem>
                <ListItem>24/7 Customer Support </ListItem>
            </List>
            <Button>Join now</Button>
    </Container>
  )
}

export default PriceCard;