import React from "react";

const LabelInput = ({label, value}: {label: string, value: string}) => {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-gray-500">{label}</label>
			<input
				type="text"
				value={value}
			/>
		</div>
	);
};

export default LabelInput;
