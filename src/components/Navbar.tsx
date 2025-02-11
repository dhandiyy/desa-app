import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-red-200 p-2 rounded-xl">
			<div className="flex">
				<Image src={"/logo/Lambang_Kabupaten_Sumenep.png"} alt="Logo desa" width={40} height={12} className="bg-black"/>
				<p>Desa Arjasa</p>
				<ul className="flex">
					<Link href={"/"}>
						<li>Home</li>
					</Link>

                    <Link href={"/"}>
						<li>Profile Desa</li>
					</Link>

                    <Link href={"/"}>
						<li>Bansos</li>
					</Link>

                    <Link href={"/"}>
						<li>Berita</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
