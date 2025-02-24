import React from "react";
import SmallHero from "@/components/SmallHero";
import Title from "@/components/Title";
import Image from "next/image";
import SmallCard from "@/components/SmallCard";
import { FaAngleDown } from "react-icons/fa";

const ProfilePage = () => {
	const textLocation = `Desa Duko berbatasan dengan Desa Basoka di bagian selatan, dengan air terjun "Turbughen" atau "Buddhegen" sebagai penanda batas alami.`;
	return (
		<div className="flex flex-col">
			<div className="md:mt-3 mt-2">
				<SmallHero
					title="Profil Desa"
					subtitle="Desa Duko, Kecamatan Rubaru, Kabupaten Sumenep"
				/>
			</div>
			<div className="mt-2">
				<Title
					text="SOTK"
					textExplanation="Struktur Organisasi dan Tata Kerja"
					height="20"
					position="justify-start"
				/>
			</div>
			<div>
				<div className="relative w-full h-[200px] my-2">
					<Image
						src="/sotr/sotr.png"
						alt="SOTR"
						fill
						className="object-cover rounded-lg"
						sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 400px, 600px"
						priority
					/>
				</div>
				<div className="bg-white rounded-lg p-5 text-sm">
					<p className="text-gray-600 mb-4">
						Struktur organisasi dan tata kerja Desa Duko disusun untuk memastikan kelancaran pelayanan kepada masyarakat serta efektivitas
						dalam pelaksanaan tugas pemerintahan desa.
					</p>
					<ol className="list-decimal list-inside space-y-3 text-gray-700">
						<li className="p-3 bg-gray-100 rounded-md shadow-sm">
							<strong className="text-gray-900">Kepala Desa</strong> bertanggung jawab atas kepemimpinan dan pengambilan keputusan
							strategis dalam pemerintahan desa.
						</li>
						<li className="p-3 bg-gray-100 rounded-md shadow-sm">
							<strong className="text-gray-900">Sekretaris Desa</strong> mengoordinasikan administrasi desa serta memastikan kelancaran
							komunikasi antar perangkat desa.
						</li>
						<li className="p-3 bg-gray-100 rounded-md shadow-sm">
							<strong className="text-gray-900">Kaur dan Kasi</strong> memiliki tugas masing-masing, seperti mengelola keuangan,
							perencanaan pembangunan, serta pelayanan kemasyarakatan.
						</li>
						<li className="p-3 bg-gray-100 rounded-md shadow-sm">
							<strong className="text-gray-900">Kepala Dusun</strong> bertanggung jawab dalam mengoordinasikan kegiatan dan permasalahan
							di tingkat dusun.
						</li>
					</ol>
				</div>

				<div className="bg-custom_background p-5 rounded-xl">
					<SmallCard
						titleCard="Lokasi"
						text={textLocation}
					/>
					<div className="mt-5 h-[20vh] w-full bg-blue-200 rounded-xl justify-center items-center flex">
						<p>Ini Maps nih</p>
					</div>
				</div>

				<div className="mt-2">
					<Title
						text="APBD"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="bg-custom_background p-5 rounded-xl">
					<div className="bg-white p-7 rounded-xl h-full">
						<div className="flex justify-between items-center">
							<p className="md:font-extrabold font-bold md:text-2xl text-xl mb-2 font-montserrat">Laporan</p>

							{/* dropdown */}
							<div className="relative inline-block w-32">
								<select className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
									<option
										value=""
										disabled
										selected
									>
										Pilih Tahun
									</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option>
									<option value="2022">2022</option>
									<option value="2023">2023</option>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
								</select>
								<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
									<FaAngleDown
										aria-hidden="true"
										className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
									/>
								</div>
							</div>
						</div>
						<p className="text-sm md:text-base">Penjelasan</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
