import React, {Component} from 'react';

export default class ContactMe extends Component {
	render() {
		return (
			<div id="contactMe" className="content">
				<div id="contactContent">
					<div>
						<h3 id="contactHeader" className="headerText">Contact Me</h3>
					</div>
					<div id="contactLinks">
					</div>
					<ul id="contactInfo">
						<li className="contactText"><span>Telephone#:</span> (562)818-7214</li>
						<li className="contactText"><span>Email:</span> jovincent.ruiz@gmail.com</li>
						<li> still need to find logos for facebook,linkedin,github</li>
					</ul>
				</div>
			</div>
		)
	}
}