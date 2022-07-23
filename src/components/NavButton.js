import React from "react";
import { Link } from "react-router-dom";
import "./NavButton.css"

const NavButton = () => {
	return (
		<Link to="signup">
			<button className="btn">Sign Up</button>
		</Link>
	);
};

export default NavButton;
