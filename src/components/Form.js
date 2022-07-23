import React from "react";
import "./Glass.css";
import { Link } from "react-router-dom";
const Form = () => {
	return (
		<div className="glass">
			<form /*onSubmit={(e) => handleSubmit(e)} */ className="glass__form">
				<h4>Specify Region</h4>
				<ul className="radio">
					<input
						className="Glass_form__input"
						type="radio"
						id="punjab"
						name="province"
						// value={Province}
						// onChange={(e) => setProvince(e.target.value)}
						required
					/>
					<label for="punjab">Punjab</label>

					<input
						className="Glass_form__input"
						type="radio"
						id="sindh"
						name="province"
						// value={Province}
						// onChange={(e) => setProvince(e.target.value)}
						required
					/>
					<label for="sindh">Sindh</label>
					{/* </ul>
				<ul className="radio"> */}
					<input
						className="Glass_form__input"
						type="radio"
						id="KPK"
						name="province"
						// value={Province}
						// onChange={(e) => setProvince(e.target.value)}
						required
					/>
					<label for="KPK">khyber pakhtunkhwa</label>

					<input
						className="Glass_form__input"
						type="radio"
						id="Balochistan"
						name="province"
						// value={Province}
						// onChange={(e) => setProvince(e.target.value)}
						required
					/>

					<label for="Balochistan">Balochistan</label>
				</ul>
				<div className="glass__form__group">
					<input
						id="City"
						className="glass__form__input"
						placeholder="City "
						required
						title="City Input"
						type="string"
						// value={city}
						// onChange={(e) => setCity(e.target.value)}
					/>
				</div>

				<div className="glass__form__group">
					<input
						id="Crop"
						className="glass__form__input"
						placeholder="Crop"
						required
						min="0"
						type="string"
						title="Crop Input"
						// value={crop}
						// onChange={(e) => setCrop(e.target.value)}
					/>
				</div>

				<div className="glass__form__group">
					<Link to="/marketing">
						<button type="submit" className="glass__form__btn">
							Submit
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Form;
