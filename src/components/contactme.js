import React, {Component} from 'react';

export default class ContactMe extends Component {
	render() {
		return (
			<div id="contactMe" className="content">
				<div id="contactContent">
					<h3 id="contactHeader" className="headerText">Contact Me</h3>
					<ul id="contactInfo">
						<li className="contactText">Github</li>
						<li className="contactText">LinkedIn</li>							
						<li className="contactText">Email</li>
					</ul>
				</div>
			</div>
		)
	}
}