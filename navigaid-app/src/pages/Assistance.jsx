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
    margin-left: 700px;
    margin-right: 2000px;
`;


const data = [
    { name: "Epiphany Community Healthcare", Location: "Houston TX", Link: "https://echoshouston.org/", LinkText: "Epiphany Community Health Outreach Services"},
    { name: "Enroll America", Location: "Washington, D.C.", Link: 'https://enrollamerica.org', LinkText: "enrollamerica"},
    { name: "New York City Human Resources Administration", Location: "New York, NY", Link: "https://www.nyc.gov/site/hra/help/health-assistance.page", LinkText: "New York City Human Resources Administration" },
    { name: "Healthcare For All", Location: "Boston,MA", Link: "https://hcfama.org/", LinkText: "Healthcare For All" },
    { name: "Unity Healthcare", Location: "New York, NY", Link: "https://www.unityhealthcare.org" , LinkText: "Unity Healthcare"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male", LinkText: "echoshouston" },
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male", LinkText: "echoshouston" },
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male", LinkText: "echoshouston" },
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
    { name: "Unity Healthcare", Location: "New York, NY", Link: "Male" , LinkText: "echoshouston"},
]

const Assistance = () => {
    return (
        <div>
            <Container>
            <Text>
              <h1>Healthcare Coverage Assistance Organization Directory</h1>
            </Text>
            </Container>
            <table style={{ width: '100%', margin: 20}}>
                <tr style={{ width: '100%', paddingLeft: 180}}>
                    <th>Organization</th>
                    <th>Location</th>
                    <th style={{ textAlign: 'left', paddingLeft: '200px'}}>Website Link</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} style={{ marginBottom: '10px' }}>
                            <td style={{ textAlign: 'center' , marginBottom: '10px'}}>{val.name}</td>
                            <td style={{ textAlign: 'center' , marginBottom: '10px'}}>{val.Location}</td>
                            <a href={val.Link} style={{ textAlign: 'center', paddingLeft: '200px' }}>{val.LinkText}</a>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
};
 
export default Assistance;