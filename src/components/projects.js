import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png';
import japaneseX from '../assets/japanesex.png';
import meteorChat from '../assets/meteor-chat.png';

import ProjectBar from './ProjectBar';

export default class Projects extends Component {
	
	
	render() {
		let projects = {
			gameOfTowers: {	
				name: 'Game of Towers',
				technologies:'HTML | CSS | Canvas | React | Redux' ,
				description:'Simple tower defense game developed using HTML5 Canvas. My responsibilities for the game were to use the A* algorithm for pathing, and building about 80% of the games engine.' ,
				githubLink: "https://github.com/matcodesalot/creepy-walkers",
				liveLink: "http://gameoftowers.herokuapp.com",
				image: gameOfTowers
			},
			japaneseX: {	
				name: 'Japanese X',
				technologies:'HTML | CSS | React | Redux | MongoDB | OAuth 2.0' ,
				description:'A quiz app built using a spaced repetition algorithm to determine the order the questions are asked in.' ,
				githubLink:"https://github.com/jvjruiz/spaced_repetition" ,
				liveLink: "http://japanesex.herokuapp.com",
				image: japaneseX
			},
			meteorChat: {	
				name: 'Meteor Chat' ,
				technologies:'HTML | CSS | Javascript | Meteor | MongoDB | React' ,
				description:'A real time instant messaging app using React and Meteor.' ,
				githubLink:"https://github.com/jvjruiz/meteor-react-chat"  ,
				liveLink:"https://meteor-chat-react.herokuapp.com/" ,
				image: meteorChat,
			}
		}
		return(

			<div className='projectBarContainer'>
				<hr />
				<ProjectBar project = {projects.gameOfTowers} />
				<hr />
				<ProjectBar project = {projects.japaneseX} />
				<hr />
				<ProjectBar project = {projects.meteorChat} />

			</div>
		)
	}
}

