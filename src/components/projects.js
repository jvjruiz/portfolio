import React, {Component} from 'react';

export default class Projects extends Component {
	render() {
		return(
			<div id="projects">
				<div id="technologies">
					<p id="technologiesHeaderText">Technologies Used: (insert logos of techologies under)</p>
				</div>
				<div>
					<h1 id="projectsHeader">Projects</h1>
					<ul id="projectList">
						<li className="projectLeft project">
							<h3 className="projectName">Game of Towers</h3>
							<img src="" alt="insertprojectphothere"/>
							<p className="projectDescription">Game of Towers is a simple tower defense game build with HTML Canvas and Javascript. A player builds towers to stop oncoming creeps from getting to the end of the maze. Players are able to make an account and login to save their high score.</p>
						</li>
						<li className="projectRight project">
							<h3 className="projectName">Meteor Instant Messaging</h3>
							<img src="" alt="insertprojectphothere"/>
							<p className="projectDescription">This is an instant messaging app, built with React and Meteor. Users are able to make an account and chat with others in real time. All of the messages are saved on a database for later viewing.</p>
						</li>
						<li className="projectLeft project">
							<h3 className="projectName">Spaced Repition Quiz App</h3>
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
