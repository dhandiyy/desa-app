"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
	const pathname = usePathname();
	
	return (
		<div className="bg-primary py-4 rounded-2xl text-white">
			<div className="relative flex flex-col sm:mx-6 sm:flex-row sm:items-center sm:justify-between">
				
				<div className="flex items-center gap-2">
					<div className="relative w-12 h-12 sm:w-14 sm:h-14">
						<Image
							src="/logo/Lambang_Kabupaten_Sumenep.png"
							alt="Logo desa"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 48px, 64px"
						/>
					</div>
					<div>
						<p className="text-xl sm:text-3xl font-extrabold font-montserrat">Desa Arjasa</p>
						<p className="text-sm sm:text-base font-light">Sumenep, Jawa Timur</p>
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
					<ul className="flex flex-col sm:flex-row gap-y-1 sm:gap-x-4 sm:pr-4">
						<Link href={"/"}>
							<li className="sm:font-light relative group sm:text-lg">
								Home
								{pathname === "/" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/profile-desa"}>
							<li className="sm:font-light relative group sm:text-lg">
								Profil Desa
								{pathname === "/profile-desa" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/bansos"}>
							<li className="sm:font-light relative group sm:text-lg">
								Informasi Bansos
								{pathname === "/bansos" && (
									<div className="hidden sm:block">
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-white rounded-full" />
									</div>
								)}
							</li>
						</Link>

						<Link href={"/berita"}>
							<li className="sm:font-light relative group sm:text-lg">
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
