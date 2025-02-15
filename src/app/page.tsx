import Hero from "@/components/Hero";
import SmallCard from "@/components/SmallCard";
import Title from "@/components/Title";
import Image from "next/image";
export default function Home() {
	const textArjasa =
		"Desa Arjasa merupakan bagian dari Kecamatan Arjasa, Kab. Sumenep.Berlokasi di dekat laut dengan pantai berpasir putih seperti Pasir Putih Batu Gulok yang dikelilingi perairan Laut Jawa. Sebagai wilayah kepulauan di Pulau Kangean, desa ini memiliki potensi wisata alam yang menakjubkan. Aksesibilitasnya dekat pelabuhan menjadikannya ramai dikunjungi, terutama saat liburan. Pengembangan fasilitas wisata terus dilakukan melalui kolaborasi pemerintah dan kelompok masyarakat setempat";

	return (
		<div>
			<Hero />
			<Title />
			<div className="h-screen w-full bg-blue-100 rounded-tl-[250px] mt-3">
				<div className="grid grid-cols-2 justify-between gap-10 px-20 py-7">
					<div>
						<div className="absolute -translate-y-60 translate-x-16">
							<Image
								src="/sea1.png"
								alt="Deskripsi hero section"
								width={600}
								height={600}
								sizes="(max-width: 768px) 130vw, 80vw"
							/>
						</div>
					</div>
					<div>
						<SmallCard text={textArjasa} />
						<div className="flex mt-3 justify-between">
							<div className="bg-white rounded-xl p-7">
								<p>
									<i>Total Penduduk: </i>
									<b>±150.000 Jiwa</b>
								</p>
								<p>
									<i>Total Keluarga: </i>
									<b>500</b>
								</p>
							</div>
							<div className="bg-white rounded-xl p-7">
								<p>
									<i>Komoditas: </i>
									<b>Ikan</b>
								</p>
							</div>
						</div>
						<button className="bg-primary px-7 py-3 rounded-full mt-3 text-white">Profile Desa</button>
					</div>
				</div>
			</div>
		</div>
	);
}
