import React, {Component} from 'react';

export default class ContactMe extends Component {
	render() {
		return (
			<div id="contactMe">
				<div id="contactContent">
					<div id="contact_header">
						<h3>Contact Me</h3>
					</div>
					<div id="contactLinks">
					</div>
					<ul id="contactInfo">
						<li className="contactText"><span>Telephone#:</span> (562)818-7214</li>
						<li className="contactText"><span>Email:</span> jovincent.ruiz@gmail.com</li>
					</ul>
				</div>
			</div>
		)
	}
}