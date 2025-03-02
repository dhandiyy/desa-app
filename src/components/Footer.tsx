import React from "react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
	return (
		<div className={`flex flex-col text-white items-center justify-center md:pt-16 py-4 md:pb-5 relative z-10 bg-primary md:bg-transparent mt-8 md:mt-36`}>
			<Image
				src="/footer/footer.png"
				alt="Footer background"
				fill
				className="object-fill -z-10 hidden md:block"
			/>
			<div className="flex flex-col items-center justify-center">
				<div className="relative w-12 h-12 sm:w-24 sm:h-24">
					<Image
						src="/logo/Lambang_Kabupaten_Sumenep.png"
						alt="Logo desa"
						fill
						className="object-contai"
						sizes="(max-width: 768px) 64px, 48px"
					/>
				</div>
				<p className="font-montserrat md:text-5xl text-xl font-bold md:mt-4 mt-2">Desa Duko</p>
				<p className="md:font-semibold md:text-md text-sm md:mt-2">Kecamatan Rubaru, Kabupaten Sumenep </p>
			</div>

			<div className="flex md:items-start md:justify-around w-full md:mt-14 md:px-20 flex-col md:flex-row items-center">
				<div className="md:w-52">
					<p className="border-b font-semibold py-1 hidden md:block">Social Media</p>
					<div className="flex gap-3 items-center justify-center md:mt-3 p-2">
						<FaFacebookSquare className="text-4xl" />
						<FaInstagram className="text-4xl" />
						<FaYoutube className="text-4xl" />
						<FaTwitterSquare className="text-4xl" />
					</div>
				</div>

				<div>
					<p className="border-b font-semibold py-1 hidden md:block">Kontak Penting</p>
					<div className="flex gap-3 justify-between md:text-base text-sm md:mt-3">
						<div className="flex p-2">
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

						<div className="flex p-2">
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

				<div className="md:w-52">
					<p className="border-b font-semibold py-1 hidden md:block">Informasi</p>
					<ul className="list-none md:mt-3 p-2 text-sm md:text-base flex flex-row md:flex-col gap-16 md:gap-2 font-bold md:font-normal">
						{["Bansos", "Berita", "APBD"].map((item) => (
							<li
								key={item}
								className="flex items-center"
							>
								<div className="h-2 w-2 bg-white rounded-full mr-2 hidden md:block" />
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
