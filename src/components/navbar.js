import React, {Component} from "react";
import Menu from "./menu"

export default class NavBar extends Component {
	render() {
		return (
			<div id="navBarContainer">
				<div className="menuContainer">
					<Menu />
				</div>
				<div id="navBarLinkContainer">
					<ul id="navBar">
						<li className="contactText"><a href="https://github.com/jvjruiz" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
						</li>
						<li className="contactText"><a href="https://www.linkedin.com/in/jo-vincent-ruiz-722b6b132" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
						</li>							
						<li className="contactText"><a href="mailto:jovincent.ruiz@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
