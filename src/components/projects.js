import React, {Component} from 'react';
import jsLogo from "../assets/logos/js.png";
import htmlLogo from "../assets/logos/html5.png";
import cssLogo from "../assets/logos/css3.png";
import jqueryLogo from "../assets/logos/jquery.png";
import meteorLogo from "../assets/logos/meteor.png";
import reactLogo from "../assets/logos/react.png";
import reduxLogo from "../assets/logos/redux.png";
import mongoLogo from "../assets/logos/mongodb.png";
import canvasLogo from "../assets/logos/canvas.png";

export default class Projects extends Component {
	render() {
		return(
			<div id="projects">
				<div id="technologies">
					<div id="techonologiesContent">
						<p id="technologiesHeader">Projects</p>
						<div id="languages">
							<ul id="languageList">
								<li className="language">
									<img src={htmlLogo} className="logo"/>
								</li>
								<li className="language">
									<img src={cssLogo} className="logo"/>
								</li>
								<li className="language">
									<img src={jsLogo} className="logo"/>
								</li>
							</ul>
						</div>
						<div id="api">
							<ul id="apiList">
								<li className="api">
									<img src={meteorLogo} className="logo"/>
								</li>
								<li className="api">
									<img src={reduxLogo} className="logo"/>
								</li>
								<li className="api">
									<img src={reactLogo} className="logo"/>
								</li>
								<li className="api">
									<img src={mongoLogo} className="logo"/>
								</li>
								<li className="api">
									<img src={canvasLogo} className="logo"/>
								</li>
								<li className="api">
									<img src={jqueryLogo} className="logo"/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content">
					<ul id="projectList">
						<li className="project">
							<div className="projectContent">
								<a href="https://gameoftowers.herokuapp.com/" className="projectName">Game of Towers</a>
								<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
							</div>
							<div className="projectPhotoContainer">
								<img src="" alt="insertprojectphothere" id="projectPhoto"/>
							</div>
						</li>
						<li className="project">
							<div className="projectContent">
								<a href="https://gameoftowers.herokuapp.com/" className="projectName">Game of Towers</a>
								<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
							</div>
							<div className="projectPhoto">
								<img src="" alt="insertprojectphothere"/>
							</div>
						</li>
						<li className="project">
							<div className="projectContent">
								<a href="https://gameoftowers.herokuapp.com/" className="projectName">Game of Towers</a>
								<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
							</div>
							<div className="projectPhoto">
								<img src="" alt="insertprojectphothere"/>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

//going have .gifs for each photo. only animate when hovering over
