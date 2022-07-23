import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
	return (
		<div className="cards">
			<div>Please Select Your Region</div>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="/public/Pictures/img-1.jpg"
							text="Punjab"
							label="Punjab"
							path="/services"
						/>
						<CardItem
							src="/public/Pictures/img-1.jpg"
							text="Baloch"
							label="Baloch"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="/public/Pictures/img-1.jpg"
							text="Sindh"
							label="Sindh"
							path="/services"
						/>
						<CardItem
							src="/public/Pictures/img-1.jpg"
							text="K.P.K"
							label="K.P.K"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
