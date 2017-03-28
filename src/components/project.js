import React, {Component} from 'react';

import gameOfTowers from '../assets/game-of-towers.png'

export default class Project extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props)
        if(this.props.showing == 'true'){
            return(
                <div className="projectContainer dark" id="gameOfTowers">
                    <div className="projectContent">
                        <div className="projectImageContainer">
                            <img src={gameOfTowers} className="projectImage" />
                        </div>

                        <div className ="projectText">
                            <div className="projectName subHeaderText">
                                Game of Towers
                            </div>
                            <div className="projectTechnologies contentText">
                                <p>HTML | CSS | Canvas | React | Redux</p>
                            </div>
                            <div className="projectDescription contentText">
                                <p>Tower defense game made built with Canvas using an entity component system architecture.</p>
                                <p>My contribution to the project is about 80% of the games system, including implementing the A* algorithm for the pathing.</p> 
                            </div>
                            <div className="projectLinks">
                                <div className="projectLink">
                                    <a href="https://github.com/matcodesalot/creepy-walkers" className="projectLink" className="projectLinkText">Go To Github</a>
                                </div>
                                <div className="projectLink">
                                    <a href="http://gameoftowers.herokuapp.com" className="projectLink" className="projectLinkText">Check It Out Live</a>
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