import React from "react";

interface SmallCardProps {
	text: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ text }) => {
	return (
		<div className="bg-white p-7 rounded-xl">
			<p className="">{text}</p>
		</div>
	);
};

export default SmallCard;
