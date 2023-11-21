import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 200%;
    background-color: #111
    color: lightgray;
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const List = styled.div`
    padding: 0; 
    margin: 0; 
    list-style: none;
    display: flex; 

`;
const ListItem = styled.div`
`;

const Copyright = styled.span`
`;


export const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem> Guide </ListItem>
                <ListItem> Support </ListItem>
                <ListItem> API </ListItem>
                <ListItem> Community </ListItem>
            </List>
            <Copyright>Navigaid © </Copyright>
        </Wrapper>
    </Container>
  )
}

export default Footer;