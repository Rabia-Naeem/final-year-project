import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Signup from "./pages/Signup"
import Marketing from "./pages/Marketing"
import Development from "./pages/Development"
import Design from "./pages/Design"
import Consulting from "./pages/Consulting"
function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/"  element={<Home/>}></Route>
					<Route path="/contacts" element={<Contacts/>}></Route>
					<Route path="/products" element={<Products/>}></Route>
					<Route path="/services" element={<Services/>}></Route>
					<Route path="/signup" element={<Signup/>}></Route>
					<Route path="/marketing" element={<Marketing/>}></Route>
					<Route path="/development" element={<Development/>}></Route>
					<Route path="/design" element={<Design/>}></Route>
					<Route path="/consulting" element={<Consulting/>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
