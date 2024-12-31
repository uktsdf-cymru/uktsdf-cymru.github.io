import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarItem.css'

function NavBarItem(props) {
	return(
		<li className="NavBarItem"><Link to={props.action}>{props.label}</Link></li>
	);
}

export default NavBarItem