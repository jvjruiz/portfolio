import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'

export default class Project extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.project.name)
        if(this.props.showing === 'true' && this.props.project.name == "FridgeFinder") {
            return (
                <div className="projectContainer active" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <iframe src={this.props.project.liveLink} width="274px" height="587px" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
                            </div>
                            <div className="projectDescription contentText">
                               {this.props.project.description} 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href={this.props.project.githubLink} className="projectLink" className="projectLinkText">Go To Github</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.showing === 'false' && this.props.project.name == "FridgeFinder") {
            return (
                <div className="projectContainer hide" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <iframe src={this.props.liveLink} width="378px" height="800px" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
                            </div>
                            <div className="projectDescription contentText">
                               {this.props.project.description} 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href={this.props.project.githubLink} className="projectLink" className="projectLinkText">Go To Github</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.showing === 'true' && this.props.project.name === "Fanboxo") {
            return (
                <div className="projectContainer show" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={this.props.project.image} className="projectImage" />
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
                            </div>
                            <div className="projectDescription contentText">
                               {this.props.project.description} 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href={this.props.project.liveLink} className="projectLink" className="projectLinkText">Check It Out Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.showing == 'false' && this.props.project.name === "Fanboxo") {
            return (
                <div className="projectContainer hide" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={this.props.project.image} className="projectImage" />
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
                            </div>
                            <div className="projectDescription contentText">
                               {this.props.project.description} 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href={this.props.project.liveLink} className="projectLink" className="projectLinkText">Check It Out Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.showing === 'true'){
            return (
                <div className="projectContainer active" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={this.props.project.image} className="projectImage" />
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
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
            )
        }
        else {
            return(
                <div className="projectContainer hide" id={this.props.project.name}>
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={this.props.project.image} className="projectImage" />
                        </div>
                        <div className ="projectText">
                            <div className="projectTechnologies contentText">
                                <p>{this.props.project.technologies}</p>
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
            )
        }
    }
}