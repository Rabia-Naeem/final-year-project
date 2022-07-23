import React from "react";
import "./form-field.css";
import { useState } from "react";
import {Link} from "react-router-dom"
const FormField = () => {
	const [moisture, setmoisture] = useState("");
	const [temp, setTemp] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		// const params = { moisture, temp };
	};

	return (
		<div className="glass">
			<form onSubmit={(e) => handleSubmit(e)} className="glass__form">
				<div className="glass__form__group">
					<select
						id="moisture"
						className="glass__form__input"
						placeholder="City "
						required
						min="0"
						title="Moisture Input"
						type="number"
						onChange={(e) => setmoisture(e.target.value)}
					>
						<option value="faisalabad">Faisalabad</option>
						<option value="multan">multan</option>
						<option value="lahore">lahore</option>
						<option value="faisalabad">Faisalabad</option>
						<option value="faisalabad">Faisalabad</option>
					</select>
				</div>

				<div className="glass__form__group">
					<select
						id="temp"
						className="glass__form__input"
						placeholder="Crops"
						required
						min="0"
						type="number"
						title="Temperature Input"
						value={temp}
						onChange={(e) => setTemp(e.target.value)}
					>
						<option value="Cassava">Cassava</option>
						<option value="maize">maize</option>
						<option value="potatoes">potatoes</option>
						<option value="rice">rice</option>
					</select>
				</div>

				<div className="glass__form__group">
					<Link to="/products"><button type="submit" className="glass__form__btn__submit">
						Submit
					</button></Link>
				</div>
			</form>
		</div>
	);
};

export default FormField;
