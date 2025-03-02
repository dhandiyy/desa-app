import Image from "next/image";
import React from "react";
import imageNews from "/public/galeri/2.jpg";

interface CardNewsProps {
	title: string;
	explanationText: string;
}

const CardNews: React.FC<CardNewsProps> = ({ title, explanationText }) => {
	return (
		<div className="border-4 border-gray-300 rounded-xl p-1 md:w-[50vh]">
			<div className="relative flex">
				<Image
					src={imageNews}
					alt="Pict of news"
					className="object-cover rounded-xl"
				/>
			</div>
			<div className="text-sm p-4 flex items-center justify-between md:flex-col md:items-start">
				<p className="text-lg font-bold">{title}</p>
				<p className="hidden md:block text-justify">{explanationText}</p>

				<button className="bg-secondary px-3 py-1 md:mt-4 rounded-full md:ml-auto">Selengkapnya</button>
			</div>
		</div>
	);
};

export default CardNews;
