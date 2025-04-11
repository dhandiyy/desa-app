import React from "react";
import { HiBars3 } from "react-icons/hi2";

const NavbarAdmin = ({ setIsSideBarOpen }: { setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
                <button className="size-7 bg-slate-200 rounded-full">
                    <span>AA</span>
                </button>
			</div>
		</header>
	);
};

export default NavbarAdmin;
