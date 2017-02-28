import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'
import japaneseX from '../assets/japanesex.png'
import meteorChat from '../assets/meteor-chat.png'

export default class Projects extends Component {
	render() {
		return(
			<div id="projectsContainer">
				<div className="projectContainer dark" id="gameOfTowers">
					<div className="projectContent">
						<div className="projectImageContainer">
							<img src={gameOfTowers} className="projectImage" />
						</div>

						<div className ="projectText">
							<div className="projectName subHeaderText">
								Game of Towers
							</div>
							<div className="projectTechnologies contentText">
								<p>HTML - CSS - Canvas - React - Redux</p>
							</div>
							<div className="projectDescription contentText">
								<p>A simple tower defense game made built with Canvas using an entity component system architecture.</p>
								<p>This project was developed over the course of 3 weeks in a group of 4. My contribution to the project is about 80% of the games system, including implementing the A* algorithm for the pathing.</p> 
							</div>
							<div className="projectLinkText">
								<div className="projectLink">
									<a href="https://github.com/matcodesalot/creepy-walkers" className="projectLink" className="projectLinkText">Go To Github</a>
								</div>
								<div className="projectLink">
									<a href="gameoftowers.herokuapp.com" className="projectLink" className="projectLinkText">Check It Out Live</a>
								</div>
							</div>

						</div>
					</div>					
				</div>
				<div className="projectContainer" id="japaneseX">
					<div className="projectContent">
						<div className="projectImageContainer">
							<img src={japaneseX} className="projectImage" />
						</div>
						<div className ="projectText">
							<div className="projectName subHeaderText">
								JapaneseX
							</div>
							<div className="projectTechnologies contentText">
								<p>HTML - CSS - React - Redux - MongoDB - OAuth 2.0</p>
							</div>

							<div className="projectDescription contentText">
								<p>Japanese word quiz app built with React using a spaced repetition algorithm to determine the question being asked. This was a two person project and my role was to build the back end and debug any issues my partner was having on the front-end.
								</p>
							</div>
							<div className="projectLinkText">
								<div className="projectLink">
									<a href="https://github.com/jvjruiz/spaced_repetition" className="projectLinkText">Go To Github</a>
								</div>
								<div className="projectLink">
									<a href="gameoftowers.herokuapp.com" className="projectLinkText">Check It Out Live</a>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="projectContainer dark" id="meteorChat">
					<div className="projectContent">
						<div className="projectImageContainer">
							<img src={meteorChat} className="projectImage" />
						</div>
						<div className ="projectText">
							<div className="projectName subHeaderText">
								Meteor Chat
							</div>
							<div className="projectTechnologies contentText">
								<p>HTML - CSS - Javascript - Meteor - React</p>
							</div>
							<div className="projectDescription contentText">
								<p>Instant messaging app build with React and Meteor. This app was built over the course of a week as a solo project. 
								</p>
							</div>
							<div className="projectLinkText">
								<div className="projectLink">
									<a href="https://github.com/jvjruiz/meteor-react-chat" className="projectLinkText">Go To Github</a>
								</div>
								<div className="projectLink">
									<a href="https://meteor-chat-react.herokuapp.com/" className="projectLinkText">Check It Out Live</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

