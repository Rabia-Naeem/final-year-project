import React from "react";
import { Link } from "react-router-dom";
import { GiPlantWatering } from "react-icons/gi";
import "./Navbar.css";
import { navItems } from "./NavItems";
import NavButton from "./NavButton";
import Dropdown from "./Dropdown";
import { useState } from "react";
const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo">
					SMART PLANT
					<GiPlantWatering size="1.5em" />
				</Link>
				<ul className="nav-items">
					{navItems.map((item) => {
						if (item.title === "Services") {
							return (
								<li
									key={item.id}
									className={`${item.cName}`}
									// onClick={() => setDropdown(!dropdown)}
									onMouseEnter={() => setDropdown(true)}
									onMouseLeave={() => setDropdown(false)}
								>
									<Link to={item.path}>{item.title}</Link>
									{dropdown && <Dropdown />}
								</li>
							);
						}
						return (
							<li key={item.id} className={item.cName}>
								<Link to={item.path}>{item.title}</Link>
							</li>
						);
					})}
					;
				</ul>
				<NavButton />
			</nav>
		</>
	);
};

export default Navbar;
