"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const ImageGallery = () => {
	const images = [
		"/galeri/1.jpg",
		"/galeri/2.jpg",
		"/galeri/3.jpg",
		"/galeri/4.jpg",
		"/galeri/5.jpeg",
		"/galeri/6.jpg",
		"/galeri/7.jpg",
	];

	const [mainImage, setMainImage] = useState(images[1]);
	const [startIndex, setStartIndex] = useState(0);
	const visibleImages = 5;

	const handleNext = () => {
		if (startIndex + visibleImages < images.length) {
			setStartIndex(startIndex + 1);
		}
	};

	const handlePrev = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1);
		}
	};

	return (
		<div className="max-w-4xl mx-auto p-4 space-y-4">
			{/* Main Image */}
			<div className="relative w-full aspect-[16/9]">
				<Image
					src={mainImage}
					alt="Featured image"
					fill
					className="rounded-lg object-cover"
					priority
				/>
			</div>

			{/* Thumbnail Navigation */}
			<div className="relative flex items-center justify-center">
				<button
					onClick={handlePrev}
					className="absolute left-4 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
					disabled={startIndex === 0}
				>
					<FaChevronLeft className="w-6 h-6" />
				</button>

				<div className="flex gap-4 overflow-hidden mx-8">
					{images.slice(startIndex, startIndex + visibleImages).map((img, index) => (
						<div
							key={img}
							className="relative flex-shrink-0 w-36 aspect-square cursor-pointer"
							onClick={() => setMainImage(img)}
						>
							<Image
								src={img}
								alt={`Gallery image ${index + 1}`}
								fill
								className={`rounded-lg object-cover transition-opacity duration-300 ${
									mainImage === img ? "opacity-100" : "opacity-60 hover:opacity-100"
								}`}
							/>
						</div>
					))}
				</div>

				<button
					onClick={handleNext}
					className="absolute right-4 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white"
					disabled={startIndex + visibleImages >= images.length}
				>
					<FaChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default ImageGallery;
