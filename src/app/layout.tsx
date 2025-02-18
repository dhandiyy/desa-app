import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Montserrat_Alternates, Inter } from "next/font/google";

export const metadata: Metadata = {
	title: "Website Desa",
	description: "Website Informasi Mengenai Desa",
};

const inter = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: ["normal", "italic"],
	variable: "--font-inter",
	display: "swap",
});

const montserrat = Montserrat_Alternates({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${montserrat.variable}`}
		>
			<body className="p-3">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
