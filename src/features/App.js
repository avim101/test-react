import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import GCHeader from "../components/Headr";
import CoursesPage from "./Courses";


const App = () => {
    function getPage() {
        const route = window.location.pathname;
        if (route === '/about') return  <AboutPage/>;
        if (route === '/home') return <HomePage/>;
        return <CoursesPage/>
    }

    return <GCHeader content={getPage()}/>
};

export default App;
