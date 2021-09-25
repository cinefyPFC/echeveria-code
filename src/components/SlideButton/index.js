import React from 'react';

// import { Container } from './styles';
import './style.css';
function SlideButton(props) {
	return (
		<div>
			<label className="switch" >
  				<input type="checkbox" onClick={props.onClick}/>
  				<span className="slider round"></span>
			</label>
		</div>
  );
}

export default SlideButton;
