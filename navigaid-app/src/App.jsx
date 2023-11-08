import React from 'react';
import styled, { css } from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { Feature } from "./components/Feature";
import { Service } from "./components/Service";
import { Price } from "./components/Price";
import {Route, Routes} from "react-router-dom";


import About from "./pages/About";
import Home from "./pages/Home";
import Assistance from "./pages/Assistance";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";


const Container = styled.div`
    height: 100vh;
    position: relarive;
`;

//Create a common css since we are repeating the same properties
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1; 
`

const IntroShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 53% 100%);
background-color: blue;
`;

// const FeatureShape = styled.div`
//     ${Shape}
//     clip-path: polygon(0 0, 42% 0%, 20% 100%, 0% 100%);
//     background-color: pink;
// `;

// const ServiceShape = styled.div`
//     ${Shape}
//     clip-path: polygon(0 0, 20% 0%, 20% 100%, 0% 100%);
//     background-color: brown;
// `;

// const PriceShape = styled.div`
//     ${Shape}
//     clip-path: polygon(67% 0, 100% 0%, 100% 100%, 53% 100%);
//     background-color: yellow;
// `;


const App = () => {
    return (
        <>
        <Navbar/>
        <div className="Container">
           <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/features" element={<Intro/>}/>
            <Route exact path="/service" element={<Service/>}/>
            <Route exact path="/assistance" element={<Assistance/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
     </div>
     </>
    );
};

export default App;