import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";

function App() {
	const navigate = useNavigate();
	return (
		<div className="h-full w-full flex items-center justify-center bg-white">
			<Onboarding />
		</div>
	);
}

export default App;
