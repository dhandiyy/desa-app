import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HiHome, HiSquares2X2, HiUser, HiCog6Tooth, HiInformationCircle, HiNewspaper, HiMiniUserGroup,HiChatBubbleLeftEllipsis } from "react-icons/hi2";

// Navigation items
const navigationItems = [
	{
		title: "Dashboard",
		icon: HiSquares2X2,
		href: "/admin",
	},
	{
		title: "Pengaduan Masyarakat",
		icon: HiChatBubbleLeftEllipsis,
		href: "/admin/pengaduan",
	},
	{
		title: "Informasi Desa",
		icon: HiInformationCircle ,
		href: "/admin/desa",
	},
	{
		title: "Halaman Home",
		icon: HiHome,
		href: "/admin/home",
	},
	{
		title: "Halaman Profil Desa",
		icon: HiUser,
		href: "/admin/profile",
	},
	{
		title: "Halaman Informasi Bansos",
		icon: HiMiniUserGroup,
		href: "/admin/bansos",
	},
	{
		title: "Halaman Berita",
		icon: HiNewspaper,
		href: "/admin/news",
	},
	{
		title: "Settings",
		icon: HiCog6Tooth,
		href: "/admin/settings",
	},
];

const SideBar = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<>
			{isOpen && (
				<div className="fixed z-50 inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)}/>
			)}
			<div className={`border z-50 bg-white fixed inset-y-0 left-0 w-60 md:w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
				{/* header */}
				<div className="flex items-center justify-center h-16 p-3 gap-3 border-b">
					<div className="size-10 relative">
						<Image
							src={"/logo/Lambang_Kabupaten_Sumenep.png"}
							alt="Logo desa"
							fill
							className="object-contain"
						/>
					</div>
					<span className="font-montserrat font-bold">Desa Duko</span>
				</div>

				{/* navigation */}
				<div>
					<nav className="space-y-4 p-5">
						{navigationItems.map((item) => (
							<Link
								href={item.href}
								key={item.title}
								className="flex items-center text-[14px]"
							>
								<item.icon className="mr-3 text-xl"/>
								{item.title}
							</Link>
						))}
					</nav>
				</div>

				{/* footer */}
				<div className="absolute bottom-0 w-full p-4 border-t">
					<p className="text-xs text-gray-500">© 2025 Desa</p>
				</div>
			</div>
		</>
	);
};

export default SideBar;
