import React from "react";
import Image from "next/image";
import { IoWarningOutline } from "react-icons/io5";

const Hero = () => {
	return (
		<section className="relative min-h-[600px] flex items-end h-screen rounded-xl mt-3">
			{/* Gradient Overlay untuk baca teks */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10 rounded-xl" />

			{/* Image Component */}
			<div className="absolute inset-0">
				<Image
					src="/hero/hero.jpg"
					alt="Deskripsi hero section"
					fill
					priority
					className="object-cover object-center rounded-xl"
					sizes="(max-width: 768px) 100vw, 80vw"
				/>
			</div>

			{/* Konten Teks */}
			<div className="flex w-full justify-between items-center flex-row mx-10">
				<div className="relative z-20 text-white mb-10">
					<p className="text-xl">Website Resmi</p>
					<h1 className="text-4xl md:text-8xl font-bold font-montserrat">Desa Arjasa</h1>
					<p className="text-lg md:text-xl">kecamatan Arjasa, Kabupaten Sumenep</p>
				</div>
				<div className="relative h-48 w-72 bg-white/25 backdrop-blur-sm rounded-xl mb-10 flex flex-col items-center justify-between p-7">
					<p className="text-white font-sans italic">
						Jika Anda memiliki pengaduan terkait desa, silakan laporkan di sini.
					</p>
					<button className="bg-white w-full py-2 rounded-xl flex items-center justify-center hover:cursor-pointer font-semibold">
						<IoWarningOutline
							className="text-black mr-3"
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
