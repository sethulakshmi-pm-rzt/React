import React from 'react';
import PropTypes from 'prop-types';
import List from '../component/List.js';
import Image from '../component/Image.js';
import blogImg from '../blog-img.png';
class Content extends React.Component {
	render () {		
		return (
			<div className = "contentBlock">
				<h2 className = "nextHeader"><u>Praesent lorem mi</u></h2>
				<p className = "nextPara">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio efficitur, eu efficitur tellus egestas. orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio efficitur, eu efficitur tellus egestas.
				</p>
				<List data={["Lorem ipsum dolor sit amet", "consectetur adipiscing elit", "Praesent lorem mi, viverra", "auctor gravida porttitor", "luctus vitae lorem"]}/>
				<p className = "nextList">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio 
				<Image className = "secondImage" src = {blogImg} alt = "Blog secondImage"/>
					efficitur, eu efficitur tellus egestas. orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio efficitur, eu efficitur tellus egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio.Pellentesque efficitur turpis vitae odio efficitur, eu efficitur tellus egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio.Pellentesque efficitur turpis vitae odio efficitur, eu efficitur tellus egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem mi, viverra auctor gravida porttitor, luctus vitae lorem. Pellentesque efficitur turpis vitae odio.
				</p>
			</div>
		);
	}
}
export default Content