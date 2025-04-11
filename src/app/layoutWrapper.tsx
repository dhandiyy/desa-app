"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
	const pathName = usePathname();
	const hideLayout = ["/admin", "/login"];

	const shouldHideLayout = hideLayout.includes(pathName) || pathName.startsWith("/admin/");

	return (
		<div className={`${shouldHideLayout? "p-0" : "sm:p-3 p-2"}`}>
			{!shouldHideLayout && <Navbar />}
			{children}
			{!shouldHideLayout && <Footer />}
		</div>
	);
}
