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
    { name: "North Country HealthCare", Location: "Bullhead City, AZ", Link: "https://northcountryhealthcare.org/services/" , LinkText: "northcountryhealthcare"},
    { name: "Cherokee Health Systems", Location: "Clinton, TN", Link: "https://www.cherokeehealth.com/" , LinkText:"cherokeehealth.com"},
    { name: "Community Health Center of Buffalo", Location: "New York, NY", Link: "https://chcb.net/home-1/" , LinkText: "Community Health Center of Buffalo"},
    { name: "HealthRIGHT 360", Location: "San Francisco, CA", Link: "https://www.healthright360.org/" , LinkText: "HealthRIGHT 360"},
    { name: "Henry J. Austin Health Center", Location: "Trenton, NJ", Link: "https://henryjaustin.org/" , LinkText: "Henry J. Austin Health Center"},
    { name: "Borinquen Health Care Center", Location: "Miami, Florida", Link: "https://www.borinquenhealth.org/" , LinkText: "borinquenhealth"},
    { name: "Erie Family Health Centers", Location: "Chicago, IL", Link: "https://www.eriefamilyhealth.org/" , LinkText: "Erie Family Health Centers"},
    { name: "AmeriCares", Location: "Stamford, CT", Link: "https://www.americares.org/where-we-work/north-america/united-states-programs", LinkText: "americares"},
    { name: "Nevada Health Link", Location: "New York, NY", Link: "Male", LinkText: "echoshouston" },
    { name: "Westchester County Social Services", Location: "New York, NY", Link: "https://socialservices.westchestergov.com/medical-assistance" , LinkText: "Westchester County Social Services"},
    { name: "MassHealth Customer Service Center", Location: "Boston, MA", Link: "https://www.mass.gov/how-to/find-help-with-your-masshealth-insurance-application" , LinkText: "MassHealth Customer Service Center"},
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