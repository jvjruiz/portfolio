import React, {Component} from 'react';

import ImageGallery from 'react-image-gallery';

export default class Projects extends Component {
	handleImageLoad(event) {
    	console.log('Image loaded ', event.target)
  	}

	render() {
		const images = [
	      {
	        original: 'http://lorempixel.com/1000/600/nature/1/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
	      },
	      {
	        original: 'http://lorempixel.com/1000/600/nature/2/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
	      },
	      {
	        original: 'http://lorempixel.com/1000/600/nature/3/',
	        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
	      }
    	]

		return(
			<div id="projects">
				<div id="technologies">
					<div id="techonologiesContent">
						<h1 id="technologiesHeader">Projects</h1>
					</div>
				</div>
				<div>
					<ImageGallery
        			items={images}
        			slideInterval={2000}
        			onImageLoad={this.handleImageLoad}
        			/>
				</div>
			</div>
		)
	}
}

//going have .gifs for each photo. only animate when hovering over
