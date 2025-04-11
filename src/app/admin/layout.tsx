import React from "react";
import type { Metadata } from "next";
import LayoutWrapperAdmin from "./layoutWrapper";

export const metadata: Metadata = {
	title: "Website Admin Desa",
	description: "CMS Admin Desa",
};


const LayoutAdminPage = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div>
			<LayoutWrapperAdmin>{children}</LayoutWrapperAdmin>			
		</div>
	);
};

export default LayoutAdminPage;
