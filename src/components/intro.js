import React, {Component} from 'react';

export default class Intro extends Component {
	randomNumber(min,max) {
		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
	}

	renderRandomPhrase() {
		let randomPhrases=['I Live in constant fear of hitting my head.', 'Sometimes I can not help but dance.','Nothing beats a medium rare steak.', 'Science Rules.', 'Success is just like something at the store, you just have to go get it.']
		let randomPhrase = randomPhrases[this.randomNumber(0,randomPhrases.length)]
		return (
			<p className="randomPhrase">{randomPhrase}</p>
		)
	}

	render() {
		return (
			<div id="intro" >
				<div id="introContentContainer" className="content">
					<h1 id="intro_message">
						Hi, 
						<br />
						<span>I'm </span>
						<span id="name">JR</span>
						<span>.</span>
						<span id="blinking-cursor">|</span>
					</h1>
					<ul id="intro_icons">
						<li className="intro_icon">
							Leader.				
						</li>
						<li className="intro_icon">
							Developer.			
						</li>
						<li className="intro_icon">
							Communicator.				
						</li>
					</ul>
					<div className="randomPhraseContainer">
						{this.renderRandomPhrase()}
					</div>
				</div>
			</div>
		)
	}
}

//insert brand photos here