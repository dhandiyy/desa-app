import React from "react";
import SmallHero from "@/components/SmallHero";
import Title from "@/components/Title";
import Image from "next/image";
import SmallCard from "@/components/SmallCard";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Footer from "@/components/Footer";

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
			<div className="md:px-24">
				<div className="mt-8 md:mt-36">
					<Title
						text="SOTK"
						textExplanation="Struktur Organisasi dan Tata Kerja"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="relative w-full h-[200px] my-2 md:mt-9 md:mb-6 md:h-[90vh]">
					<Image
						src="/sotr/sotr.png"
						alt="SOTR"
						fill
						className="md:object-contain object-cover rounded-lg"
						sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 400px, 600px"
						priority
					/>
				</div>
				<div className="mt-2 px-5 text-sm md:text-base">
					<p className="text-gray-700 mb-4 text-justify">
						Struktur organisasi dan tata kerja Desa Duko disusun untuk memastikan kelancaran pelayanan kepada masyarakat serta efektivitas dalam pelaksanaan tugas pemerintahan desa.
					</p>
					<ol className="list-decimal list-inside space-y-3 text-gray-700 px-3">
						<li>
							<strong className="text-gray-900">Kepala Desa</strong> bertanggung jawab atas kepemimpinan dan pengambilan keputusan strategis dalam pemerintahan desa.
						</li>
						<li>
							<strong className="text-gray-900">Sekretaris Desa</strong> mengoordinasikan administrasi desa serta memastikan kelancaran komunikasi antar perangkat desa.
						</li>
						<li>
							<strong className="text-gray-900">Kaur dan Kasi</strong> memiliki tugas masing-masing, seperti mengelola keuangan, perencanaan pembangunan, serta pelayanan kemasyarakatan.
						</li>
						<li>
							<strong className="text-gray-900">Kepala Dusun</strong> bertanggung jawab dalam mengoordinasikan kegiatan dan permasalahan di tingkat dusun.
						</li>
					</ol>
				</div>

				<div className="bg-custom_background rounded-2xl mt-8 flex md:items-center flex-col md:flex-row gap-5 p-5">
					<div className="md:flex-1 md:self-stretch items-center">
						<SmallCard
							titleCard="Lokasi"
							text={textLocation}
						/>
					</div>
					<div className="h-[20vh] w-full bg-blue-200 rounded-xl justify-center items-center flex md:flex-1">
						<p>Ini Maps nih</p>
					</div>
				</div>

				<div className="mt-8 md:mt-36">
					<Title
						text="APBD"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="bg-custom_background p-5 rounded-2xl mt-2 md:mt-9 md:mb-6 md:flex md:items-center md:gap-5">

					<div className="bg-white p-7 rounded-xl h-full md:flex-1">
						<div className="flex justify-between items-center">
							<p className="md:font-extrabold font-bold md:text-2xl text-xl mb-2 font-montserrat">Laporan</p>

							{/* dropdown */}
							<div className="relative inline-block w-32 text-sm">
								<select className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none">
									<option
										value=""
										disabled
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
						<p className="text-sm md:text-base text-justify mt-2">
							APBD (Anggaran Pendapatan dan Belanja Desa) adalah rencana keuangan tahunan desa yang disusun secara transparan untuk mendukung pembangunan dan kesejahteraan masyarakat.
							Anggaran ini mencakup pendapatan desa serta belanja untuk program pembangunan dan operasional pemerintahan.
						</p>
					</div>

					<div className="bg-white p-7 rounded-xl h-full mt-2 flex flex-col gap-8 md:flex-1 md:flex-row md:justify-between">
						<div>
							<div className="flex items-center">
								<FaAngleUp
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4 text-green-500 md:size-7"
								/>
								<p className="text-sm md:text-base">Pendapatan</p>
							</div>
							<p className="text-2xl font-extrabold md:text-3xl">Rp. 2.500.000.000</p>
						</div>

						<div>
							<div className="flex items-center">
								<FaAngleDown
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center md:size-7 justify-self-end sm:size-4 text-red-500"
								/>
								<p className="text-sm md:text-base">Pengeluaran</p>
							</div>
							<p className="text-2xl font-extrabold md:text-3xl">Rp. 1.500.000.000</p>
						</div>
					</div>
				</div>

				<div className="mt-8 md:mt-36">
					<Title
						text="Demografi Penduduk"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="bg-custom_background p-5 rounded-xl mt-2 md:mt-9 md:mb-6">
					<SmallCard
						titleCard="Berdasarkan Umur"
						text="Chart demografi penduduk berdasarkan umur menunjukkan distribusi usia di suatu wilayah. Data ini membantu perencanaan kebijakan di bidang pendidikan, kesehatan, dan kesejahteraan sosial."
					/>
					<div className="mt-5 h-[20vh] w-full border-secondary border-8 rounded-xl justify-center items-center flex">
						<p>Ini Charts nih</p>
					</div>
				</div>
				<div className="bg-custom_background p-5 rounded-xl mt-2">
					<SmallCard
						titleCard="Berdasarkan Pendapatan"
						text="Chart demografi penduduk berdasarkan pendapatan menunjukkan distribusi ekonomi masyarakat. Data ini membantu perencanaan kebijakan di bidang kesejahteraan, pemberdayaan, dan pembangunan ekonomi."
					/>
					<div className="mt-5 h-[20vh] w-full border-secondary border-8 rounded-xl justify-center items-center flex">
						<p>Ini Charts nih</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProfilePage;
