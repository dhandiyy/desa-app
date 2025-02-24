import React from "react";

interface SmallCardProps {
	text: string;
	titleCard?: string
}

const SmallCard: React.FC<SmallCardProps> = ({ text, titleCard }) => {
	return (
		<div className="bg-white p-7 rounded-xl h-full">
			{titleCard && (
				<p className="md:font-extrabold font-bold md:text-2xl text-xl mb-2 font-montserrat">{titleCard}</p>
			)}
			<p className="text-sm md:text-base">{text}</p>
		</div>
	);
};

export default SmallCard;
