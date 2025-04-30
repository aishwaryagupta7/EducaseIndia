import React from "react";
import marryDoeImage from "../assets/MaryDoe.jpg";
import { Camera } from "lucide-react";

function Profile() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="w-[375px] min-h-full shadow-lg flex flex-col bg-[#F7F8F9]">
				<div className="w-full p-5 border-b border-gray-300 bg-white">
					<h1 className="text-lg font-medium text-gray-600">
						Account Settings
					</h1>
				</div>

				<div className="p-5">
					<div className="flex items-center">
						<div className="relative mr-4">
							<img
								src={marryDoeImage}
								alt="Profile"
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full w-4 h-4 flex items-center justify-center">
								<Camera size={12} fill="white" color="#6C25FF" />
							</div>
						</div>

						<div>
							<h2 className="font-medium">Marry Doe</h2>
							<p className="text-sm text-gray-500">Marry@Gmail.Com</p>
						</div>
					</div>

					<p className="text-sm text-gray-600 mt-4 leading-relaxed">
						Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
						Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
						Erat, Sed Diam
					</p>
				</div>

				<div className="border-t border-dashed border-gray-300 h-16"></div>
			</div>
		</div>
	);
}

export default Profile;
