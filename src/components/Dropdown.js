import React from "react";
import "./Dropdown.css";
import { serviceDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div>
			<ul
				className={dropdown ? "services-submanu clicked" : "services-submanu"}
				onClick={() => setDropdown(!dropdown)}
			>
				{serviceDropdown.map((item) => {
					return (
						<li key={item.id} onClick={() => setDropdown(false)}>
							<Link to={item.path} className={item.cName}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Dropdown;
