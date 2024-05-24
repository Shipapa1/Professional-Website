import Home from "./home/Home";
import About from "./about/About";
import Projects from "./Projects/Projects"
import Extracurricular from "./Extracurricular/Extra";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/Projects'} element={<Projects/>} />
            <Route exact path={'/Extracurricular'} element={<Extracurricular />} />
        </Routes>
    )
}