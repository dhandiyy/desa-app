"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDown, IoClose} from "react-icons/io5";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-red-200 p-4 rounded-xl">
			<div className="max-w-6xl mx-auto">
				<div className="flex `justify-between` items-center">
					{/* Logo dan Nama */}
					<div className="flex items-center gap-3">
						<div className="relative w-12 h-12 md:w-16 md:h-16">
							<Image
								src="/logo/Lambang_Kabupaten_Sumenep.png"
								alt="Logo desa"
								fill
								className="object-contain"
								sizes="(max-width: 768px) 48px, 64px"
							/>
						</div>
						<p className="text-lg font-semibold">Desa Arjasa</p>
					</div>

					{/* Desktop Menu */}
					<ul className="hidden md:flex gap-6">
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Home</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Profile Desa</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Bansos</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Berita</li>
						</Link>
					</ul>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <IoClose size={24} /> : <IoChevronDown size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<ul className="md:hidden pt-4 space-y-3">
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Home</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Profile Desa</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Bansos</li>
						</Link>
						<Link href="/">
							<li className="hover:text-red-600 cursor-pointer">Berita</li>
						</Link>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
