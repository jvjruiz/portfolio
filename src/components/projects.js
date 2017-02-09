import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'
import japaneseX from '../assets/japanesex.png'
import meteorChat from '../assets/meteor-chat.png'

export default class Projects extends Component {
	handleImageLoad(event) {
    	console.log('Image loaded ', event.target)
  	}

	render() {
		const images = [
	      {
	        original: gameOfTowers,
	        thumbnail: gameOfTowers,
	        description: 'A simple tower defense game made built with Canvas using an entity component system architecture.',
	        originalClass: "galleryImage",
	        thumbnailClass: "thumbnailImage",
	       technologies: "HTML - CSS - Canvas - React - Redux - MongoDB",
	        projectName: "Game of Towers"
	      },
	      {
	       original: meteorChat,
	        thumbnail: meteorChat,
	        description: 'Instant messaging app build with React and Meteor.',
	        originalClass: "galleryImage",
	        thumbnailClass: "thumbnailImage",
	        technologies: "HTML - CSS - Meteor - React",
	        projectName: "Meteor Chat"
	      },
	      {
	       original: japaneseX,
	        thumbnail: japaneseX,
	        description: 'Japanese word quiz app built with React using a spaced repetition algorithm to determine the question being asked.',
	        originalClass: "galleryImage",
	        thumbnailClass: "thumbnailImage",
	        technologies: "HTML - CSS - React - Redux - MongoDB - OAuth 2.0",
	        projectName: "Japanese X"
	      }
    	]

		return(
			<div id="projects">
				<div>
					<span className="headerContainer">
						<h1 id="projectsHeader">Projects</h1>
					</span>
					<span className="contentContainer">
						<div className="projectContainer">
							<div className="project">
								<div className="projectName">
									Game of Towers
								</div>
								<div className="projectTechnologies">
									HTML - CSS - Canvas - React - Redux
								</div>
								<div className="projectDescription">
									A simple tower defense game made built with Canvas using an entity component system architecture.
								</div>
								<div className="projectImage">
									<img src={gameOfTowers} />
								</div>
							</div>
						</div>
					</span>
				</div>
			</div>
		)
	}
}

//going have .gifs for each photo. only animate when hovering over
