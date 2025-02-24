import React from "react";
import Image from "next/image";
import { IoWarningOutline } from "react-icons/io5";

const Hero = () => {
	return (
		<section className="flex-col sm:flex-row relative min-h-[600px] flex sm:items-end h-screen sm:mt-3 mt-1">
			{/* Gradient Overlay untuk baca teks */}
			<div className="absolute inset-0 sm:bg-gradient-to-r from-black/10 to-transparent z-10 sm:rounded-xl rounded-lg bg-gradient-to-b" />

			{/* Image Component */}
			<div className="absolute inset-0">
				<Image
					src="/hero/hero.png"
					alt="Deskripsi hero section"
					fill
					priority
					className="object-cover object-center sm:rounded-xl rounded-lg"
					sizes="(max-width: 768px) 100vw, 80vw"
				/>
			</div>

			{/* Konten Teks */}
			<div className="flex flex-col w-full h-screen md:items-end z-10 lg:justify-between lg:flex-row lg:mx-20 lg:py-20 items-center  justify-between">

				<div className="relative z-10 text-white flex flex-col items-center md:items-start max-w-7xl mx-auto w-full flex-1 justify-center">
					<p className="text-base sm:text-xl md:text-2xl font-bold">Website Resmi</p>

					<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-bold font-montserrat leading-tight">Desa Duko</h1>
					<p className="text-base sm:text-xl md:text-2xl font-bold mt-2">Kecamatan Rubaru, Kabupaten Sumenep</p>
				</div>

				<div className="relative md:h-44 md:w-72 h-30 w-64 bg-white/25 backdrop-blur-sm rounded-xl flex flex-col items-center justify-between p-7 z-20 mb-10 sm:mb-0">
					<p className="text-white font-sans italic text-justify text-xs md:text-base">
						Anda memiliki pengaduan terkait desa? silakan laporkan di sini.
					</p>

					<button className="bg-white w-full md:py-2 py-1 rounded-xl flex items-center justify-center hover:cursor-pointer hover:bg-primary hover:text-white font-semibold mt-3 group transition-colors duration-200">
						<IoWarningOutline
							className="mr-3 text-black group-hover:text-white transition-colors duration-200"
							size={24}
						/>
						<p className="text-sm md:text-base">Pengaduan</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
