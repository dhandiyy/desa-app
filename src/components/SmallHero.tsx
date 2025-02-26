import React from "react";
import Image from "next/image";

interface SmallHeroProps {
	backgroundImage?: string;
	title?: string;
	subtitle?: string;
}

const SmallHero: React.FC<SmallHeroProps> = ({
	backgroundImage = "/hero/hero.png",
	title = "Default Title",
	subtitle = "Default subtitle text",
}) => {
	return (
		<div className="relative w-full md:h-[50vh] h-[25vh]">
			<div className="hidden md:block relative w-full h-full">
				<div
					className="absolute inset-0
                                [mask-image:url('/shape/shape.png')] 
                                [mask-position:bottom] 
                                [mask-size:100%_100%]
                                [mask-repeat:no-repeat]
                                [-webkit-mask-image:url('/shape/shape.png')]
                                [-webkit-mask-position:bottom]
                                [-webkit-mask-size:100%_100%]"
				>
					<Image
						src={backgroundImage}
						alt="Background"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>

			<div className="block md:hidden relative w-full h-[25vh]">
				<Image
					src={backgroundImage}
					alt="Background"
					fill
					className="object-cover rounded-xl rounded-b-[80px]"
					priority
				/>
			</div>

			<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 h-[25vh] md:h-full">
				<h1 className="text-4xl md:text-6xl font-bold text-white md:mb-4 drop-shadow-lg font-montserrat">{title}</h1>
				<p className="text-xs font-bold md:text-xl text-white max-w-2xl drop-shadow-lg">{subtitle}</p>
			</div>
		</div>
	);
};

export default SmallHero;
