import React, {Component} from 'react';

export default class Projects extends Component {
	render() {
		return(
			<div id="projects">
				<div id="technologies">
					<div id="techonologiesContent">
						<p id="technologiesHeader">Technologies Used</p>
						<div id="languages">
							<p id="languageHeader">Languages:</p>
							<ul id="languageList">
								<li id="language">
									HTML5
								</li>
								<li id="language">
									CSS3
								</li>
								<li id="language">
									Javascript
								</li>
							</ul>
						</div>
						<div id="api">
							<p id="apiHeader">Frameworks/Libraries:</p>
							<ul id="apiList">
								<li id="api">
									React
								</li>
								<li id="api">
									Redux
								</li>
								<li id="api">
									Meteor
								</li>
								<li id="api">
									MongoDB
								</li>
								<li id="api">
									jQuery
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="content">
					<h1 id="projectsHeader" className="headerText">Projects</h1>
					<ul id="projectList">
						<li className="projectLeft project">
							<a href="https://gameoftowers.herokuapp.com/" className="projectName">Game of Towers</a>
							<img src="" alt="insertprojectphothere"/>
							<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
						</li>
						<li className="projectRight project">
							<a href="https://meteor-chat-react.herokuapp.com/" className="projectName">Meteor Instant Messaging</a>
							<img src="" alt="insertprojectphothere"/>
							<p className="projectDescription">This is an instant messaging app, built with React and Meteor. Users are able to make an account and chat with others in real time. All of the messages are saved on a database for later viewing.</p>
						</li>
						<li className="projectLeft project">
							<a href="https://spaced-repetition-cloned-jvruiz.c9users.io/#/" className="projectName">Spaced Repition Quiz App</a>
							<img src="" alt="insertprojectphothere"/>
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
