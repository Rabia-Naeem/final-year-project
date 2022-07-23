import "./Glass.css";
import { useState } from "react";
import axios from "axios";

function Glass() {
	const [moisture, setmoisture] = useState("");
	const [temp, setTemp] = useState("");
	const [prediction, setPrediction] = useState("");
	const [interpretation, setInterpretation] = useState("");

	// backend API
	const handleSubmit = (e) => {
		e.preventDefault();
		const params = { moisture, temp };

		axios
			.post("http://localhost:8000/prediction", params)
			.then((res) => {
				const data = res.data.data;
				// const parameters = JSON.stringify(params);
				setPrediction(data.prediction);
				setInterpretation(data.interpretation);
			})
			.catch((error) => alert(`Error: ${error.message}`));
	};

	const reset = () => {
		setmoisture("");
		setTemp("");
		setPrediction("");
		setInterpretation("");
	};

	return (
		<div className="glass">
			<form onSubmit={(e) => handleSubmit(e)} className="glass__form">
				<h4>Crops Data</h4>
				<div className="glass__form__group">
					<input
						id="moisture"
						className="glass__form__input"
						placeholder="Moisture "
						required
						min="0"
						title="Moisture Input"
						type="number"
						value={moisture}
						onChange={(e) => setmoisture(e.target.value)}
					/>
				</div>

				<div className="glass__form__group">
					<input
						id="temp"
						className="glass__form__input"
						placeholder="Temperature"
						required
						min="0"
						type="number"
						title="Temperature Input"
						value={temp}
						onChange={(e) => setTemp(e.target.value)}
					/>
				</div>

				<div className="glass__form__group">
					<button type="submit" className="glass__form__btn">
						Submit
					</button>
				</div>
				<div className="output">
					{`Prediction: ${prediction}`}
					<div>{`Interpretation: ${interpretation}`}</div>
				</div>
				<div className="glass__form__group">
					<button type="button" className="glass__form__btn" onClick={reset}>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}
export default Glass;
