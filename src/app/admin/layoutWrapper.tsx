"use client";
import NavbarAdmin from "@/components/NavbarAdmin";
import SideBar from "@/components/SideBar";
import React, { useState } from "react";

const LayoutWrapperAdmin = ({ children }: { children: React.ReactNode }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(true);

	return (
		<div className="flex min-h-screen text-gray-700">
			<SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
			<div className="flex flex-col flex-1 min-h-screen">
				<NavbarAdmin setIsSideBarOpen={setIsSideBarOpen}/>
                <main className="flex-1">{children}</main>
			</div>
		</div>
	);
};

export default LayoutWrapperAdmin;
