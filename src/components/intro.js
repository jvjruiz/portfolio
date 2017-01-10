import React, {Component} from 'react';

export default class Intro extends Component {
	render() {
		return (
			<div id="intro" >
				<div id="intro_content" className="content">
					<p id="intro_message" className="headerText">Hi I'm Jo Vincent, but you can call me JR</p>
					<ul id="intro_icons">
						<li className="intro_icon">
							Builder.				
						</li>
						<li className="intro_icon">
							Communicator.			
						</li>
						<li className="intro_icon">
							Implementor.				
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

//insert brand photos here