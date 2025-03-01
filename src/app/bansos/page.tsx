"use client";

import CardBansos from "@/components/CardBansos";
import SmallHero from "@/components/SmallHero";
import Title from "@/components/Title";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Footer from "@/components/Footer";

const BansosPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const explanation = "Lorem ipsum dolor sit amet consectetur. Facilisis nisi sit mattis bibendum nulla euismod purus vitae.";

	return (
		<div className="flex flex-col">
			<div className="md:mt-3 mt-2">
				<SmallHero
					title="Informasi Bansos"
					subtitle="Desa Duko, Kecamatan Rubaru, Kabupaten Sumenep"
				/>
			</div>

			{/* Body */}
			<div className="md:px-24">
				<div className="mt-8 md:mt-36">
					<Title
						text="Statistik Penerima"
						textExplanation="Jenis Program Bantuan Sosial dan Jumlah Penerima"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="mt-8 flex flex-col gap-2 md:flex-row md:gap-5">
					<CardBansos
						value={8}
						title="Bantuan Vaksin I"
						explanation={explanation}
					/>

					<CardBansos
						value={10}
						title="Bantuan Vaksin II"
						explanation={explanation}
					/>

					<CardBansos
						value={5}
						title="Bantuan Vaksin IV"
						explanation={explanation}
					/>
				</div>

				<div className="mt-8 md:mt-36">
					<Title
						text="Cek Penerima Bansos"
						height="20"
						position="justify-start"
					/>
				</div>

				{/* <div className="bg-custom_background rounded-xl p-4 md:flex md:justify-center md:items-center">
					<div className="relative w-full h-[150px] md:h-[250px] md:absolute">
						<Image
							src="/bansos/bansos-pict.png"
							alt="Bansos"
							fill
							className="object-contain rounded-lg md:object-cover"
							sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 400px, 600px"
							priority
						/>
					</div>

					<div className="bg-white rounded-xl p-2 text-sm">
						<div className="p-4">
							<h2 className="text-xl font-semibold mb-3">Cari Datamu</h2>

							<div className="relative">
								<div className="flex items-center relative">
									<span className="absolute left-3 text-gray-400">
										<FaSearch />
									</span>
									<input
										type="text"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="pl-10 pr-4 py-2 w-full border-primary border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
										placeholder="Cari data..."
									/>
								</div>

								{searchQuery.trim() === "" && <p className="italic text-gray-400 mt-2">Tidak ada data</p>}
							</div>
						</div>
						<p className="p-4">*Demi keamanan, hanya NIK yang sesuai yang ditampilkan</p>
					</div>
				</div> */}

				<div className="bg-custom_background rounded-xl p-4 relative overflow-visible mb-12 md:mb-36">
					{/* Container utama dengan flex pada desktop */}
					<div className="flex flex-col md:flex-row md:items-center">
						{/* Container untuk gambar */}
						<div className="relative h-[200px] w-full mb-4 md:mb-0 md:w-1/2 md:order-2 md:relative md:-right-32">
							<div className="relative w-full h-full md:absolute md:w-[400px] md:h-[400px] md:-translate-y-32">
								<Image
									src="/bansos/bansos-pict.png"
									alt="Bansos"
									fill
									className="object-contain"
									sizes="(max-width: 640px) 300px, (max-width: 768px) 300px, (max-width: 1024px) 300px, 600px"
									priority
								/>
							</div>
						</div>

						{/* Container untuk konten teks */}
						<div className="bg-white rounded-xl p-2 text-sm w-full md:w-1/2 md:order-1">
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-3">Cari Datamu</h2>
								<div className="relative">
									<div className="flex items-center relative">
										<span className="absolute left-3 text-gray-400">
											<FaSearch />
										</span>
										<input
											type="text"
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
											className="pl-10 pr-4 py-2 w-full border-primary border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
											placeholder="Cari data..."
										/>
									</div>
									{searchQuery.trim() === "" && <p className="italic text-gray-400 mt-2">Tidak ada data</p>}
								</div>
							</div>
							<p className="p-4">*Demi keamanan, hanya NIK yang sesuai yang ditampilkan</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BansosPage;
