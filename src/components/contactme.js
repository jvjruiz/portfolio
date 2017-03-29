import React, {Component} from 'react';

export default class ContactMe extends Component {
	render() {
		return (
			<div id="contactMe">

				<div id="contactContent">
					<div id="contactInfo">
						<ul id="contactInfoList">
							<li className="contactLink contentText"><a href="https://github.com/jvjruiz" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span className="white"> github.com/jvjruiz</span></a></li>
							<li className="contactLink contentText"><a href="https://www.linkedin.com/in/jo-vincent-ruiz-722b6b132" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i><span className="white"> linkedin.com/in/jvruiz</span></a></li>							
							<li className="contactLink contentText"><a href="mailto:jovincent.ruiz@gmail.com" target="_blank"><i className="fa fa-envelope-o" aria-hidden="true"></i><span className="white"> jovincent.ruiz@gmail.com</span></a></li>

						</ul>
					</div>
					<div id="contactMessage">
						<p className="contactText contentText">
							Want to chat? Grab Coffee? Interested in my work?
						</p>
						<p className="contactText contentText">
							Reach me through one of the methods on the left.
						</p>
						<p className="contactText contentText">
							Looking forward to speaking with you!
						</p>
					</div>
				</div>
			</div>
		)
	}
}

