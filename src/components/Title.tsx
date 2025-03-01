import React from "react";

interface TitleProps {
	position: string;
	height: string;
	text: string;
	textExplanation?: string;
}

const Title: React.FC<TitleProps> = ({ position, text, textExplanation }) => {
	return (
		<div className={`flex md:${position} md:items-end`}>
			<div className="flex items-center md:items-end md:pr-5">
				
				<div className={`md:w-[7px] w-[5px] self-stretch bg-primary rounded-full md:mr-5 mr-3`} />

				<div className="flex-1 my-auto">
					<h2 className="text-2xl md:text-6xl font-bold font-montserrat">{text}</h2>
					{textExplanation && <p className="text-sm -mt-1 md:text-xl">{textExplanation}</p>}
				</div>
			</div>
		</div>
	);
};

export default Title;
