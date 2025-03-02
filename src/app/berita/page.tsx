"use client";

import CardNews from "@/components/CardNews";
import PaginationNav from "@/components/PaginationNav";
import SmallHero from "@/components/SmallHero";
import Title from "@/components/Title";
import React, { useState } from "react";

const BeritaPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 5;
	const textNews =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu erat  in diam tristique molestie sit amet sit amet dolor. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames ac turpis  egestas. Class aptent taciti sociosqu ad litora torquent per conubia  nostra, per inceptos himenaeos.";

	return (
		<div className="flex flex-col">
			<div className="md:mt-3 mt-2">
				<SmallHero
					title="Berita"
					subtitle="Desa Duko, Kecamatan Rubaru, Kabupaten Sumenep"
				/>
			</div>

			{/* Body */}
			<div className="md:px-24">
				<div className="mt-8 md:mt-36">
					<Title
						text="Berita Terbaru"
						textExplanation="Kabar desa terpercaya"
						height="20"
						position="justify-start"
					/>
				</div>

				<div className="mt-2 flex flex-col gap-4 md:flex-row md:mt-8">
					<CardNews
						title="Bantuan PKH 2025"
						explanationText={textNews}
					/>

					<CardNews
						title="Bantuan PKH 2025"
						explanationText={textNews}
					/>

					<CardNews
						title="Bantuan PKH 2025"
						explanationText={textNews}
					/>
				</div>
			</div>
			<div className="mt-5 md:mt-8">
				<PaginationNav
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	);
};

export default BeritaPage;
