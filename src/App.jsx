import React from "react";
import Navegation from "./components/Navegation";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from './components/Footer'

import "./styles/components/app.sass";
function App() {
  return (
    <div id="portfolio">
      <Navegation/>
      <Sidebar/>
      <MainContent/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}
export default App;

