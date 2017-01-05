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
						<li className="projectLeft project">
							<div>
								<img src="" alt="insertprojectphothere" className="projectPhoto"/>
							</div>
							<div>
								<a href="https://gameoftowers.herokuapp.com/" className="projectName">Game of Towers</a>
								<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
							</div>
						</li>
						<li className="projectRight project">
							<a href="https://meteor-chat-react.herokuapp.com/" className="projectName">Meteor Instant Messaging</a>
							<img src="" alt="insertprojectphothere" className="projectPhoto"/>
							<p className="projectDescription">This is an instant messaging app, built with React and Meteor. Users are able to make an account and chat with others in real time. All of the messages are saved on a database for later viewing.</p>
						</li>
						<li className="projectLeft project">
							<a href="https://spaced-repetition-cloned-jvruiz.c9users.io/#/" className="projectName">Spaced Repition Quiz App</a>
							<img src="" alt="insertprojectphothere" className="projectPhoto"/>
							<p className="projectDescription">This app is a quiz app that asks the user questions based on a spaced-reptition algorithm. The spaced-reptition algorithm asks the user questions by prioritizing questions that get answered incorrectly to maximize learning portential.</p>
						</li>
						{/*
						<li className="projectRight">
							<img src="" alt="insertprojectphothere"/>
							<h3 className="projectName">Need to build one/API project</h3>
							<p className="projectDescription">Insert Description here</p>
						</li>
						*/}
					</ul>
				</div>
			</div>
		)
	}
}

//going have .gifs for each photo. only animate when hovering over
