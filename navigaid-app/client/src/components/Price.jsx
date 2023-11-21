import React from 'react';
import styled from 'styled-components';
import { PriceCard } from './PriceCard';

const Container = styled.div`
    height: 100%
    display: flex;
    justify-content: center;
`;

export const Price = () => {
  return (
    <Container>
       <PriceCard price="10" type="Basic"/>
       <PriceCard price="20" type="Premium"/>
       <PriceCard price="40" type="Premium"/>
    </Container>
  )
}

export default Price;
