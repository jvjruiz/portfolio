import React, {Component} from 'react';

import Intro from './components/intro';
import AboutMe from './components/aboutme';
import Projects from './components/projects'  ;
import ContactMe from './components/contactme';
import NavBar from "./components/navbar";
import ProjectBar from "./components/ProjectBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    )
  }
}

     // <ContactMe />
