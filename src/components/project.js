import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'

export default class Project extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if(this.props.showing == 'true'){
            return(
                <div className="projectContainer" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={this.props.project.image} className="projectImage" />
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.techologies}</p>
                            </div>
                            <div className="projectDescription contentText">
                               {this.props.project.description} 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href={this.props.project.githubLink} className="projectLink" className="projectLinkText">Go To Github</a>
                                </div>
                                <div className="projectLink">
                                    <a href={this.props.project.liveLink} className="projectLink" className="projectLinkText">Check It Out Live</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        else {
            return(
                null
            )
        }
    }
}