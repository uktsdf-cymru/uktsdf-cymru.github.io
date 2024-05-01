import React from 'react';
import './NavBarItem.css'

function NavBarItem(props) {
	return(
		<li className="NavBarItem"><a href={props.action}>{props.label}</a></li>
	);
}

export default NavBarItem