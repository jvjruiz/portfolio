import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'
import japaneseX from '../assets/japanesex.png'
import meteorChat from '../assets/meteor-chat.png'

export default class Projects extends Component {
	handleImageLoad(event) {
    	console.log('Image loaded ', event.target)
  	}

	render() {
		return(
			<div>
				<span className="headerContainer">
					<h1 id="projectsHeader" className="headerText">Projects</h1>
				</span>
				<div className="projectContainer">
					<div className="projectImageContainer">
						<img src={gameOfTowers} className="projectImage" />
					</div>
					<div className ="projectText">
						<div className="projectName subHeaderText">
							Game of Towers
						</div>
						<div className="projectTechnologies contentText">
							HTML - CSS - Canvas - React - Redux
						</div>
						<div className="projectDescription contentText">
							A simple tower defense game made built with Canvas using an entity component system architecture.
						</div>
						<div className="projectLinks contentText">
							<a href="https://github.com/matcodesalot/creepy-walkers" className="projectLink">Github</a>
							<a href="gameoftowers.herokuapp.com" className="projectLink">Live</a>
						</div>
					</div>
					
				</div>
				<div className="projectContainer">
					<div className="projectImageContainer">
						<img src={japaneseX} className="projectImage" />
					</div>
					<div className ="projectText">
						<div className="projectName subHeaderText">
							JapaneseX
						</div>
						<div className="projectTechnologies contentText">
							HTML - CSS - React - Redux - MongoDB - OAuth 2.0
						</div>
						<div className="projectDescription contentText">
							Japanese word quiz app built with React using a spaced repetition algorithm to determine the question being asked.
						</div>
						<div className="projectLinks contentText">
							<div className="projectLink">
								<a href="https://github.com/jvjruiz/spaced_repetition">Github</a>
							</div>
							<div className="projectLink">
								<a href="gameoftowers.herokuapp.com">Live</a>
							</div>
						</div>
					</div>
				</div>
				<div className="projectContainer">
					<div className="projectImageContainer">
						<img src={meteorChat} className="projectImage" />
					</div>
					<div className ="projectText">
						<div className="projectName subHeaderText">
							Meteor Chat
						</div>
						<div className="projectTechnologies contentText">
							HTML - CSS - Canvas - React
						</div>
						<div className="projectDescription contentText">
							Instant messaging app build with React and Meteor.
						</div>
						<div className="projectLinks contentText">
							<div className="projectLink">
								<a href="https://github.com/jvjruiz/meteor-react-chat">Github</a>
							</div>
							<div className="projectLink">
								<a href="https://meteor-chat-react.herokuapp.com/">Live</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

//going have .gifs for each photo. only animate when hovering over
