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
				description:'adsgdafg' ,
				githubLink: "https://github.com/matcodesalot/creepy-walkers",
				liveLink: "http://gameoftowers.herokuapp.com",
				image: gameOfTowers
			},
			japaneseX: {	
				name: 'Japanese X',
				technologies:'HTML | CSS | React | Redux | MongoDB | OAuth 2.0' ,
				description:'afadfd' ,
				githubLink:"https://github.com/jvjruiz/spaced_repetition" ,
				liveLink: "http://japanesex.herokuapp.com",
				image: japaneseX
			},
			meteorChat: {	
				name: 'Meteor Chat' ,
				technologies:'HTML | CSS | Javascript | Meteor | MongoDB | React' ,
				description:'afadf' ,
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

