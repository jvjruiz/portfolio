import React, {Component} from 'react';

export default class Intro extends Component {
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
				</div>
			</div>
		)
	}
}

//insert brand photos here