import React from "react";
import Button from "../components/Button";
import {Link } from "react-router-dom"


const Home=()=> {
	return (
		<div className=" home">
			<h1>WELCOME</h1>
			<div>Please click the below button to get started!</div>
			<Link to="/services"><Button
				className="btns"
				buttonStyle={"btn--outline"}
				buttonSize="btn--large"
			>
				GET STARTED
			</Button></Link>
		</div>
	);
}

export default Home;
