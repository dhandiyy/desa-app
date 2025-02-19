import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import SmallCard from "@/components/SmallCard";
import Title from "@/components/Title";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
	const textDuko =  
	"Desa Duko merupakan bagian dari Kecamatan Rubaru, Kab. Sumenep. Berbatasan dengan Desa Basoka di selatan dengan Air Terjun Turbughen sebagai batas alami. Desa ini terdiri dari tiga dusun, yaitu Padatar Timur, Padatar Barat, dan Laok Lorong. Keindahan alamnya yang unik menjadikannya destinasi menarik. Aksesibilitasnya yang baik dengan kode pos 69456 dan kode Kemendagri 35.29.15.2009 mendorong pengembangan wisata dan sosial yang terus berlanjut.";  


	const nikahGratis =
		"Pelayanan desa tentang nikah gratis memberikan kesempatan bagi pasangan yang kurang mampu untuk melangsungkan pernikahan tanpa biaya. Program ini difasilitasi oleh pemerintah desa yang membantu dalam hal administrasi, pengurusan dokumen, serta proses pernikahan. Tujuannya adalah untuk mempermudah pasangan yang ingin menikah namun terkendala biaya, sekaligus memastikan legalitas pernikahan mereka sesuai dengan ketentuan hukum.";

	return (
		<div>
			{/* SECION1 */}
			<Hero />

			<div className="mt-36 justify-end flex px-24">
				<div className="w-1/2">
					<Title
						height="h-28"
						position="justify-end"
						text="Sekilas Tentang Desa Duko"
						textSize="text-6xl"
					/>
				</div>
			</div>
			<div className="min-h-screen w-full bg-blue-100 rounded-tl-[250px] mt-3 -mb-32 pb-40">
				{/* SECTION2 */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-24 py-7">
					{/* Grid start */}
					<div className="relative -mt-16 md:-mt-48 flex items-center justify-center">
						<div className="h-[600px] w-[600px] relative">
							<Image
								src="/sea1.png"
								alt="Deskripsi hero section"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 80vw, 40vw"
								priority
							/>
						</div>
					</div>

					<div className="space-y-4 flex flex-col">
						<SmallCard text={textDuko} />

						<div className="flex flex-col sm:flex-row gap-4">
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

						<button className="bg-primary px-7 py-3 rounded-full text-white hover:bg-primary/90 duration-200 transition-colors w-1/2">
							Profile Desa <FaLongArrowAltRight className="inline text-xl ml-3" />
						</button>
					</div>

					<div className="relative mt-20">
						<div className="absolute -left-3 w-full h-full bg-primary rounded-xl" />
						<div className="relative bg-white p-7 rounded-xl flex flex-col justify-between h-full w-full z-50">
							<div className="flex items-center">
								<Image
									src="/kepala_desa/kepaladesa.jpg"
									alt="Deskripsi hero section"
									width={50}
									height={50}
									className="object-cover rounded-full"
									sizes="(max-width: 768px) 100vw, 50vw"
									priority
								/>
								<p className="font-bold ml-4 text-xl">Kh.Ir.Makrif Amin</p>
							</div>
							<div>
								<p className="mt-16">
									Selamat datang di Desa Duko. Saya sebagai kepala desa berjanji akan memakmurkan desa, meningkatkan
									infrastruktur, kesehatan dan pendidikan
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
								<div className="bg-white rounded-xl p-7 flex-1">
									<Title
										position="justify-start"
										text="Jumlah Program Bansos"
										height="h-8"
										textSize="text-sm"
									/>
									<p className="font-montserrat text-9xl font-semibold mt-16">88</p>
								</div>

								<div className="bg-white rounded-xl p-7 flex-1">
									<Title
										position="justify-start"
										text="Jumlah Penduduk Penerima Bansos"
										height="h-8"
										textSize="text-sm"
									/>
									<p className="font-montserrat text-9xl font-semibold mt-16">88</p>
								</div>
							</div>
							<button className="bg-primary px-7 py-3 mt-4 rounded-full text-white hover:bg-primary/90 transition-colors">
								Cek Penerima Bansos <FaLongArrowAltRight className="inline text-xl ml-3" />
							</button>
						</div>
					</div>

					{/* SECTION3 */}
					<div className="py-7 col-span-2 mt-20">
						<Title
							text="Layanan Desa"
							position="justify-start"
							textSize="text-6xl"
							height="h-14"
						/>

						<div className="border border-white flex p-4 rounded-[45px] gap-4 mt-6">
							<div className="bg-white p-4 rounded-[38px] items-center">
								<ul>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">
										Nikah Gratis
									</li>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">
										Sunnat Massal
									</li>
									<li className="border border-gray-200 p-2 rounded-3xl hover:cursor-pointer hover:bg-secondary active:bg-primary active:text-white my-1">
										Pengajian Akbar
									</li>
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
							textSize="text-6xl"
							height="h-14"
						/>
						<ImageGallery />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
