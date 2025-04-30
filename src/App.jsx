import "./App.css";
import React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="w-[375px] h-[735px] bg-[#F7F8F9] shadow-lg flex flex-col items-center justify-between p-6 ">
				<div className="h-[100px]"></div>
				<div className="mb-6">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						Welcome to PopX
					</h1>
					<p className="text-gray-500 text-sm mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
					<div className="space-y-3">
						<Button
							label="Create Account"
							className="text-white bg-[#6C25FF]"
							onClick={() => navigate("/signup")}
						/>
						<Button
							label="Already Registered? Login"
							className="text-[#504E64] bg-[#CEBAFB]"
							onClick={() => navigate("/login")}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
