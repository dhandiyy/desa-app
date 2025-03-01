import React from "react";

interface CardBansosProps {
    value: number,
    title: string,
    explanation: string
}

const CardBansos: React.FC<CardBansosProps> = ({value, title, explanation}) => {
	return (
		<div className="flex">
			<div className="bg-custom_background flex-1 justify-center items-center p-6 text-sm md:text-base rounded-xl flex flex-col">
                <p className="text-center md:text-9xl text-7xl font-bold">{value}</p>
                <p className="border-b-2 border-gray-500 font-bold text-start w-full py-2">{title}</p>
                <p className="py-2">{explanation}</p>

            </div>
		</div>
	);
};

export default CardBansos;
