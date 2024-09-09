import Header from "./Components/Header/Header";
import Landing from "./Pages/LandingPage/Landing";
import './styles.css'
import {Route, Routes} from "react-router-dom";
import ServicesPage from "./Pages/RoutePages/ServicesPage";
import ProjectsPage from "./Pages/RoutePages/ProjectsPage";
import AboutUsPage from "./Pages/RoutePages/AboutUsPage";
import ContactUsPage from "./Pages/RoutePages/ContactUsPage";
import React from "react";



function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/services"} element={<ServicesPage/>}/>
            <Route path={"/projects"} element={<ProjectsPage/>}/>
            <Route path={"/about"} element={<AboutUsPage/>}/>
            <Route path={"/contact"} element={<ContactUsPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
