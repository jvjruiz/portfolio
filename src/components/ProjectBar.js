import React, {Component} from 'react';

import Project from "./project";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false
        }
        this.toggleShowing = this.toggleShowing.bind(this)
    }
    toggleShowing() {
        console.log(this.state)
        if(this.state.showing === false) {
            this.setState({showing:true});
        }
        else {
            this.setState({showing:false});
        }
    }
    render() {
		return(
			<div className="projectBar" onClick={this.toggleShowing}>
                <div className="projectHeaderContainer">
                    <header className="projectName headerText">
                        {this.props.project.name}
                    </header>
                    <i className="fa fa-chevron-down projectDownPointer" aria-hidden="true"></i>
                </div>
                {this.state.showing ? <Project showing="true" project={this.props.project} /> : <Project showing="false" project={this.props.project} />}   
            </div>
		)
	}
}

