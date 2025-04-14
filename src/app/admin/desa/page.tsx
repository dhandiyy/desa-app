import { initialData } from "@/components/DummyData";
import LabelInput from "@/components/LabelInput";
import React from "react";

const DesaPage = () => {
	return (
		<div>
			<p className="text-center font-bold text-xl mb-6">Informasi Desa</p>

			{/* GENERAL INFORMATION */}
			<div className="bg-white rounded-xl border shadow-sm">
				<div className="border-b flex justify-between py-4 px-6">
					<p className="font-bold text-lg">Informasi Umum</p>
					<p>Edit</p>
				</div>
				<div className=" grid grid-cols-2 p-6">
					<div>
						<div className="mb-5">
							<LabelInput
								label="Nama Desa"
								value={initialData.general.name}
							/>
						</div>

						<div className="mb-5">
							<LabelInput
								label="Kecamatan"
								value={initialData.general.subdistrict}
							/>
						</div>

						<div className="mb-5">
							<LabelInput
								label="Kabupaten"
								value={initialData.general.district}
							/>
						</div>

						<div className="mb-5">
							<LabelInput
								label="Provinsi"
								value={initialData.general.province}
							/>
						</div>
						<div className="mb-5">
							<LabelInput
								label="Kode Pos"
								value={initialData.general.postalCode}
							/>
						</div>
					</div>

					<div>
						<div className="mb-5">
							<LabelInput
								label="Luas Wilayah"
								value={initialData.general.area}
							/>
						</div>
						<div className="mb-5">
							<LabelInput
								label="Jumalah Dusun"
								value={initialData.general.hamlets}
							/>
						</div>
						<div className="mb-5">
							<LabelInput
								label="Jumlah RW"
								value={initialData.general.rw}
							/>
						</div>
						<div className="mb-5">
							<LabelInput
								label="Jumlah RT"
								value={initialData.general.rt}
							/>
						</div>
						<div className="mb-5">
							<LabelInput
								label="Batas Wilayah"
								value={initialData.general.boundaries}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesaPage;
