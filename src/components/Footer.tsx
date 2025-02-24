import React from "react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<div className={`flex flex-col text-white items-center justify-center pt-16 pb-5 relative z-10`}>
			<Image
				src="/footer/footer.png"
				alt="Footer background"
				fill
				className="object-fill -z-10" 
			/>
			<div className="flex flex-col items-center justify-center">
				<div className="relative w-12 h-12 sm:w-24 sm:h-24">
					<Image
						src="/logo/Lambang_Kabupaten_Sumenep.png"
						alt="Logo desa"
						fill
						className="object-contain"
						sizes="(max-width: 768px) 48px, 64px"
					/>
				</div>
				<p className="font-montserrat text-5xl font-bold mt-4">Desa Duko</p>
				<p className="font-semibold text-md mt-2">Kecamatan Rubaru, Kabupaten Sumenep </p>
			</div>

			<div className="flex items-start justify-around w-full mt-14 md:px-20">
				<div className="w-52">
					<p className="border-b font-semibold py-1">Social Media</p>
					<div className="flex gap-3 items-center justify-center mt-3 p-2">
						<FaFacebookSquare className="text-4xl" />
						<FaInstagram className="text-4xl" />
						<FaYoutube className="text-4xl" />
						<FaTwitterSquare className="text-4xl" />
					</div>
				</div>

				<div className="">
					<p className="border-b font-semibold py-1">Kontak Penting</p>
					<div className="flex gap-3 justify-between">
						<div className="flex mt-3 p-2">
							<div className="flex items-start">
								<div className="h-2 w-2 bg-white rounded-full mt-1.5 mr-2" />
								<div className="flex flex-col">
									<p>
										<i>Bhabinsa</i>
									</p>
									<p>021 111 222 333</p>
								</div>
							</div>
						</div>

						<div className="flex mt-3 p-2">
							<div className="flex items-start">
								<div className="h-2 w-2 bg-white rounded-full mt-1.5 mr-2" />
								<div className="flex flex-col">
									<p>
										<i>Mobil Sehat</i>
									</p>
									<p>021 111 222 333</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-52">
					<p className="border-b font-semibold py-1">Informasi</p>
					<ul className="list-none mt-3 p-2">
						{["Bansos", "Berita", "APBD"].map((item) => (
							<li
								key={item}
								className="flex items-center mb-2"
							>
								<div className="h-2 w-2 bg-white rounded-full mr-2" />
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
