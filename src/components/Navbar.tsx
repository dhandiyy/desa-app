"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	// Fungsi untuk menutup navbar saat scroll ke bawah
	useEffect(() => {
		const handleScroll = () => {
			if (isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isOpen]);

	// Fungsi untuk menutup navbar saat berpindah halaman
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<div className="bg-primary p-4 sm:rounded-xl rounded-lg text-white">
			<div className="relative flex flex-col sm:mx-6 sm:flex-row sm:items-center sm:justify-between">
				
				<div className="flex items-center gap-1 md:gap-2">
					<div className="relative w-12 h-12 sm:w-16 sm:h-16">
						<Image
							src="/logo/Lambang_Kabupaten_Sumenep.png"
							alt="Logo desa"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 48px, 64px"
						/>
					</div>
					<div className="flex flex-col">
						<p className="text-lg sm:text-3xl font-extrabold font-montserrat">Desa Duko</p>
						<p className="text-sm sm:text-base font-medium">Rubaru, Sumenep</p>
					</div>
				</div>

				{/* Tombol Menu */}
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className="absolute right-2 md:mt-3 mt-2.5 sm:hidden"
				>
					<IoMenu size={24} />
				</button>

				{/* Navigasi */}
				<nav className={`${isOpen ? "block" : "hidden"} mt-4 sm:mt-0 sm:block`}>
					<ul className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 sm:pr-4">
						<Link href={"/"}>
							<li className="font-light relative group sm:text-lg">
								Home
								{pathname === "/" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/profile-desa"}>
							<li className="font-light relative group sm:text-lg">
								Profil Desa
								{pathname === "/profile-desa" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/bansos"}>
							<li className="font-light relative group sm:text-lg">
								Informasi Bansos
								{pathname === "/bansos" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/berita"}>
							<li className="font-light relative group sm:text-lg">
								Berita
								{pathname === "/berita" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
