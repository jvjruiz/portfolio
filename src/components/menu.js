import React, {Component} from "react";
import Dropdown, {DropdownTrigger, DropdownContent} from "react-simple-dropdown";
import smoothScroll from "smoothscroll";

export default class Menu extends Component {
    scrollToAboutMe(event) {
        event.preventDefault();
        smoothScroll(document.querySelector("#aboutMeContainer"));
    }

    scrollToTowers(event) {
        event.preventDefault();
        smoothScroll(document.querySelector("#gameOfTowers"));
    }

    scrollToJapanese(event) {
        event.preventDefault();
        smoothScroll(document.querySelector("#japaneseX"));
    }

    scrollToMeteor(event) {
        event.preventDefault();
        smoothScroll(document.querySelector("#meteorChat"));
    }

    scrollToProjects(event) {
        event.preventDefault();
        smoothScroll(document.querySelector(".projectBarContainer"))
    }

    scrollToContact(event) {
        event.preventDefault();
        smoothScroll(document.querySelector("#contactMe"))
    }

    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <li className="nav-item contentText" onClick={this.scrollToAboutMe}>About Me</li>
                        <li className="nav-item contentText" onClick={this.scrollToProjects}>Projects</li>
                        <li className="nav-item contentText" onClick={this.scrollToContact}>Contact Me</li>
                    </ul>
                </div>
            </nav>
        )
    }
};

