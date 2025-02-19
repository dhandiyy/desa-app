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
					src="/hero/hero.jpg"
					alt="Deskripsi hero section"
					fill
					priority
					className="object-cover object-center sm:rounded-xl rounded-lg"
					sizes="(max-width: 768px) 100vw, 80vw"
				/>
			</div>

			{/* Konten Teks */}
			<div className="flex w-full justify-between items-center sm:flex-row sm:mx-20">
				<div className="relative z-10 text-white mb-20 flex flex-col justify-center">
					<p className="text-xl md:text-2xl font-bold">Website Resmi</p>
					<h1 className="text-4xl md:text-[110px] my-10 font-bold font-montserrat -m-2">Desa Duko</h1>
					<p className="text-xl md:text-2xl font-bold">kecamatan Rubaru, Kabupaten Sumenep</p>
				</div>

				<div className="relative h-44 w-72 bg-white/25 backdrop-blur-sm rounded-xl mb-20 flex flex-col items-center justify-between p-7 z-20">
					<p className="text-white font-sans italic text-justify">Anda memiliki pengaduan terkait desa? silakan laporkan di sini.</p>

					<button className="bg-white w-full py-2 rounded-xl flex items-center justify-center hover:cursor-pointer hover:bg-primary hover:text-white font-semibold mt-3 group transition-colors duration-200">
						<IoWarningOutline
							className="mr-3 text-black group-hover:text-white transition-colors duration-200"
							size={24}
						/>
						<p>Pengaduan</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
