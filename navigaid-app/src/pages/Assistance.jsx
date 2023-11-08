import React from 'react';
// import {useState, useEffect} from 'react';
import styled from "styled-components";
// import search from "../img/search.png";
// import axios from 'axios';
// import {useParams} from 'react-router-dom';

const Container = styled.div`
    width: 60%;
    margin-top:50px;
    margin-left: 250px;
    padding: 0px; 
    color: darkblue;
    text-decoration: underline;
`;



// const Image = styled.img`
//     width: 40px;
//     padding: 10px 20px;
//     align-items: center;
//     justify-content: center;

// `;

const Text = styled.span`
    width: 60%;
    margin-top: 50px;
    margin-left: 500px;
    margin-right: 2000px;
`;


const Assistance = () => {
    return (
        <div>
            <Container>
            <Text>
              <h1>Health Outreach Services which help with Medicaid</h1>
            </Text>
            </Container>
            <h3>Here are some helpful links:</h3>
            <ul>
                <li><a href="https://enrollamerica.org/">Enroll America</a></li>
                <li><a href="https://echoshouston.org/">Epiphany Community Health Outreach Services</a></li>
                <li><a href="https://www.unityhealthcare.org/">Unity Health Care</a></li>
                <li><a href="https://www.nyc.gov/site/hra/help/health-assistance.page">New York City Human Resources Administration</a></li>
            </ul>
        </div>
    );
};
 
export default Assistance;