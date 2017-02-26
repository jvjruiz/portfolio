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

    render() {
        return (
            <Dropdown>
                <DropdownTrigger><i className="fa fa-bars fa-2x" aria-hidden="true"></i></DropdownTrigger>
                <DropdownContent>
                    <ul>
                        <li>
                            <a onClick={this.scrollToAboutMe}>About Me</a>
                        </li>
                        <li>
                            <a onClick={this.scrollToTowers}>Game Of Towers</a>
                        </li>
                        <li>
                            <a onClick={this.scrollToJapanese}>Japanese X</a>
                        </li>
                        <li>
                            <a onClick={this.scrollToMeteor}>Meteor Chat</a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        )
    }
};

