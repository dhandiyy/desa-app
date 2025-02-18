import React from "react";

interface SmallCardProps {
	text: string;
	titleCard?: string
}

const SmallCard: React.FC<SmallCardProps> = ({ text, titleCard }) => {
	return (
		<div className="bg-white p-7 rounded-xl h-full">
			{titleCard && (
				<p className="font-extrabold text-2xl mb-2">{titleCard}</p>
			)}
			<p>{text}</p>
		</div>
	);
};

export default SmallCard;
