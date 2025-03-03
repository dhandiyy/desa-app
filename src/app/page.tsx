import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import SmallCard from "@/components/SmallCard";
import Title from "@/components/Title";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import kepalaDesaPict from "/public/kepala_desa/kepaladesa.jpg";

export default function Home() {
	const textDuko =
		"Desa Duko merupakan bagian dari Kecamatan Rubaru, Kab. Sumenep. Berbatasan dengan Desa Basoka di selatan dengan Air Terjun Turbughen sebagai batas alami. Desa ini terdiri dari tiga dusun, yaitu Padatar Timur, Padatar Barat, dan Laok Lorong. Keindahan alamnya yang unik menjadikannya destinasi menarik. Aksesibilitasnya yang baik dengan kode pos 69456 dan kode Kemendagri 35.29.15.2009 mendorong pengembangan wisata dan sosial yang terus berlanjut.";

	const nikahGratis =
		"Pelayanan desa tentang nikah gratis memberikan kesempatan bagi pasangan yang kurang mampu untuk melangsungkan pernikahan tanpa biaya. Program ini difasilitasi oleh pemerintah desa yang membantu dalam hal administrasi, pengurusan dokumen, serta proses pernikahan. Tujuannya adalah untuk mempermudah pasangan yang ingin menikah namun terkendala biaya, sekaligus memastikan legalitas pernikahan mereka sesuai dengan ketentuan hukum.";

	return (
		<div className="md:-mb-72 -mb-36">
			{/* SECION1 */}
			<Hero />

			<div className="md:mt-36 mt-10 justify-end flex md:px-24 px-3">
				<div className="sm:w-1/2">
					<Title
						height="h-28"
						position="justify-end"
						text="Sekilas Tentang Desa Duko"
					/>
				</div>
			</div>
			<div className="min-h-screen w-full bg-custom_background md:rounded-tl-[250px] rounded-xl mt-3 md:pb-72 pb-36">
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 px-2 md:px-24 py-4">
					<div className="relative mt-20 md:-mt-48 flex items-center justify-center rounded-lg invisible md:visible">
						<div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
							<Image
								src="/sea1.png"
								alt="Deskripsi hero section"
								fill
								className="object-cover rounded-lg"
								sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 400px, 600px"
								priority
							/>
						</div>
					</div>

					{/* SECTION2 */}
					<div className="md:space-y-4 flex flex-col gap-4">
						<SmallCard text={textDuko} />

						<div className="flex flex-col sm:flex-row gap-4 text-sm md:text-base">
							<div className="bg-white rounded-xl p-4 md:p-7 flex-1">
								<p>
									<i>Total Penduduk: </i>
									<b>±150.000 Jiwa</b>
								</p>
								<p>
									<i>Total Keluarga: </i>
									<b>500</b>
								</p>
							</div>

							<div className="bg-white rounded-xl p-4 md:p-7 flex-1">
								<p>
									<i>Sektor Pendapatan: </i>
									<b>Wisata</b>
								</p>
							</div>
						</div>

						<button className="bg-primary md:px-7 md:py-3 py-1 rounded-full text-white hover:bg-primary/90 duration-200 transition-colors w-1/2 text-sm md:text-base">
							Profile Desa <FaLongArrowAltRight className="inline size-4 ml-3" />
						</button>
					</div>

					<div className="md:relative md:mt-20">
						<div className="absolute -left-3 w-full h-full bg-primary rounded-xl hidden md:block" />

						{/* HIDDENN */}
						<div className="relative bg-white p-7 rounded-xl md:flex md:flex-col md:justify-between h-full md:w-full z-50 hidden">
							<div className="flex md:items-center">
								<div className="h-16 w-16">
									<Image
										src={kepalaDesaPict}
										alt="Deskripsi hero section"
										className="object-cover rounded-full"
										priority
									/>
								</div>
								<p className="font-bold md:ml-4 md:text-xl text-sm">Kh.Ir.Makrif Amin</p>
							</div>

							<div>
								<p className="mt-6 md:mt-16 text-sm md:text-base">
									Selamat datang di Desa Duko. Saya sebagai kepala desa berjanji akan memakmurkan desa, meningkatkan infrastruktur, kesehatan dan pendidikan
								</p>
								<div className="flex items-center mt-4">
									<div className="h-2 w-2 bg-primary" />
									<p>
										<i className="text-sm ml-3">Kepala Desa Duko</i>
									</p>
								</div>
							</div>
						</div>
					</div> 

					<div className="relative mt-20">
						<div className="flex flex-col">
							<div className="flex gap-4">
								<div className="bg-white rounded-xl p-7 flex flex-col flex-1">
									<div className="flex flex-1 items-center justify-center">
										<div className={`md:w-[6px] w-[5px] self-stretch bg-primary rounded-full mr-5`} />
										<p className="md:text-xl my-auto flex-1 text-sm">Jumlah Program Bansos</p>
									</div>

									<p className="font-montserrat md:text-9xl font-bold mt-16 text-2xl">88</p>
								</div>

								<div className="bg-white rounded-xl p-7 flex flex-col flex-1">
									<div className="flex flex-1 items-center justify-center">
										<div className={`md:w-[6px] w-[5px] self-stretch bg-primary rounded-full mr-5`} />
										<p className="md:text-xl my-auto flex-1 text-sm">Jumlah Penduduk Penerima Bansos</p>
									</div>

									<p className="font-montserrat md:text-9xl font-bold mt-16 text-2xl">88</p>
								</div>
							</div>
							<button className="bg-primary py-1 mt-4 rounded-full text-white hover:bg-primary/90 transition-colors text-sm md:text-base">
								Cek Penerima Bansos <FaLongArrowAltRight className="inline size-4 ml-3" />
							</button>
						</div>
					</div>

					{/* SECTION3 */}
					<div className="py-7 col-span-2 mt-20">
						<Title
							text="Layanan Desa"
							position="justify-start"
							height="h-14"
						/>

						<div className="border border-white flex p-4 rounded-[45px] gap-4 mt-6 md:flex-row flex-col">
							<div className="bg-white p-4 rounded-[38px] items-center text-sm md:text-base">
								<ul>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">Nikah Gratis</li>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">Sunnat Massal</li>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">Pengajian Akbar</li>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">
										Surat Keterangan Tidak Mampu
									</li>
								</ul>
							</div>
							<div className="flex-1 items-center justify-center overflow-hidden rounded-[45px]">
								<SmallCard
									text={nikahGratis}
									titleCard="Nikah Gratis"
								/>
							</div>
						</div>
					</div>

					{/* SECTION4 */}
					<div className="py-7 col-span-2 mt-20">
						<Title
							text="Galeri dan Dokumentasi"
							position="justify-start"
							height="h-14"
						/>
						<ImageGallery />
					</div>
				</div>
			</div>
		</div>
	);
}
