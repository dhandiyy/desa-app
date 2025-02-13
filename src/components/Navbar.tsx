"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div className="bg-primary p-3 rounded-2xl text-white">
			<div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
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
					<div>
						<p className="text-xl font-extrabold -mb-1">Desa Arjasa</p>
						<p className="text-xs font-thin">Sumenep, Jawa Timur</p>
					</div>
				</div>

				<input
					type="checkbox"
					id="navbar-open"
					className="hidden peer"
				/>
				<label
					htmlFor="navbar-open"
					className="cursor-pointer absolute right-0 mt-3 sm:hidden"
				>
					<IoMenu
						size={24}
						className="block peer-checked:hidden"
					/>
				</label>

				<nav className="peer-checked:block hidden mt-4 sm:mt-0 sm:block">
					<ul className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-3 sm:pr-4">
						<Link href={"/"}>
							<li className="sm:font-bold relative group">
								Home
								{pathname === "/" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/profile"}>
							<li className={`sm:font-bold ${pathname === "/profile" ? "border-b-3 border-white" : ""}`}>
								Profile Desa
							</li>
						</Link>

						<Link href={"/"}>
							<li className="sm:font-bold">Bansos</li>
						</Link>

						<Link href={"/"}>
							<li className="sm:font-bold">Berita</li>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
