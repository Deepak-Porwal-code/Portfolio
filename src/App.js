import React, { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js';
import { HashRouter } from 'react-router-dom';  
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import styled from "styled-components";
import './App.css';

// Lazy load components
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Experience = lazy(() => import("./components/Experience"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <HashRouter>
        <PerformanceOptimizer />
        <Navbar />
        <Body>
          <HeroSection />
          <Suspense fallback={<LoadingSpinner>Loading...</LoadingSpinner>}>
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Suspense>
        </Body>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
