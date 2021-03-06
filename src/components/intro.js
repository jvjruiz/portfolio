import React, {Component} from 'react';

export default class Intro extends Component {
	
	render() {
		return (
			<div id="intro" >
				<div id="introContentContainer" className="content">
					<div id="introMessageContainer">
						<h1 id="intro_message">
							Hi, 
							<br />
							<span>I'm </span>
							<span id="name">Jo Vincent</span>
							<span>.</span>
						</h1>
					</div>
					<div id="brandContainer">	
						<ul id="intro_icons" className="subHeaderText">
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
					<div id="scrollNotification">
						<i className="fa fa-chevron-down" aria-hidden="true"></i>
					</div>	
				</div>
			</div>
		)
	}
}

//insert brand photos here