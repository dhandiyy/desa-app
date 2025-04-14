"use client";
import React, { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const NavbarAdmin = ({ setIsSideBarOpen }: { setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<header className="bg-white border-b h-16 px-4 sticky top-0 flex justify-between items-center w-full z-30">
			<div>
				<button
					className="md:hidden"
					onClick={() => setIsSideBarOpen((prev) => !prev)}
				>
					<HiBars3 className="size-6" />
				</button>
			</div>
			<div className="flex gap-2 items-center">
				<p className="text-end text-black">Admin Account</p>
				<div className="relative">
					<button
						className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						<span className="text-sm font-medium">AA</span>
					</button>

					{isDropdownOpen && (
						<div>
							<div
								className="fixed inset-0 z-10"
								onClick={() => setIsDropdownOpen(false)}
							/>
							<div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
								<p>Halo</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default NavbarAdmin;
