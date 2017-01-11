import React, {Component} from "react";
import selfPhoto from "../assets/selfphotocropped.jpg"


export default class AboutMe extends Component {
	render() {
		return (
			<div id="aboutMeContainer" className="content">
				<div id="aboutMeTextContainer">
					<h2 className="headerText">Who am I?</h2>
					<p className="aboutMeText">My full name is Jo Vincent Ruiz, but you can call me JR. My entire life I have always been passionate about building and understanding how things work. That passion has translated into an ambition to become the best developer I can be. 
					</p>
					<p className="aboutMeText">Although a huge part, developing is not my entire life. My favorite thing in the world is to travel. Being able to see different cultures fascinates me and inspires me to do better in life. Some of my other interests include video games, cars, and going on wikipedia binges.
					</p>
					<p className="aboutMeText quote">
						"To learn how to succeed, you must first learn how to fail at giving up."
					</p>
				</div>
				<div id="aboutMePhotoContainer">
					<img src={selfPhoto} alt="insertpictureofme" id="aboutMePicture"/>
				</div>
			</div>
		)
	}
}