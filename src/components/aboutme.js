import React, {Component} from 'react';

export default class AboutMe extends Component {
	render() {
		return (
			<div id="aboutMeContainer">
				<h1 id="aboutMeHeader">About me</h1>
				<p className="aboutMeText">Ever since I was a child, I have been fascinated with how things are put and work together in harmony. Legos and models were always my favorite toys, which led to computers and cars becoming my hobbies today. That fascination grew stronger as I got older and I wanted to become an engineer. After attempting the community college transfer route, the combination of the difficulty in getting the correct classes to transfer in a reasonable amount of time and the discovery of my dislike for physics led me to pursue a degree in economics. After college I found a job in insurance claims, and after almost a year of working a job I did not enjoy I decided to try my hand at coding. Once again my fascination for how things work and are put together was found and this time it has grown into a new found passion.
				</p>
				<p className="aboutMeText">My time spent not working on coding has not gone to waste, I have learned many things about myself, along with skills in communication, learning, and working efficiently that will make me an invaluable asset to any team.
				</p>
				<img src="" alt="insertpictureofme" id="aboutMePicture"/>
			</div>
		)
	}
}