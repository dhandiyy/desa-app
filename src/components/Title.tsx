import React from "react";

interface TitleProps {
	position: string;
	textSize: string;
	height: string;
	text: string;
}

const Title: React.FC<TitleProps> = ({ position, textSize, height, text }) => {
	return (
		<div className={`flex ${position} items-end`}>
			<div className="flex items-center pr-5">
				<div className={`w-[10px] ${height} bg-primary rounded-full mr-5`} />
				<p className={`${textSize} font-semibold font-montserrat`}>{text}</p>
			</div>
		</div>
	);
};

export default Title;
