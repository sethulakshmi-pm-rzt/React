import React from 'react';
import Image from './../Image.js';
import logo from './../../image/at&t-logo.jpg';
import imgThumb from './../../image/img-thumb.jpg';

class Content extends React.Component {

	render() {
		return (
			<div className = "content_wrapper">
				<div>
					<Image src = {imgThumb} alt = "Image Thumb" className = "content_image" />
					<div className = "content_wrapper_inside">
						<h4>This is Come Task</h4>
						<p>
							Phasellus elit ante, ornare venenatis suscipit eet, tincidunt plaserat nisl. Aenean ut leo nibh. Suspendisse potenti. Proin odio ligula, pellentesque sit amet pharetra nec, aliquet id elit.
						</p>
					</div>

				</div>				
			</div>
		);
	}
}

export default Content