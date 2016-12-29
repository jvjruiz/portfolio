import React, {Component} from 'react';

import Intro from './components/intro';
import AboutMe from './components/aboutme';
import Projects from './components/projects'  ;
import ContactMe from './components/contactme';


export default class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    )
  }
}

