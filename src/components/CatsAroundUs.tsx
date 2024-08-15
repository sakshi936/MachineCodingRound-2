import React from "react";

function CatsAroundUs() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<div className="bg-[url('/CatsAroundUs/bg.svg')] w-full h-full bg-[#828080] py-16 px-6">
			<h1 className="text-3xl font-bold ml-4">Cats Around Us</h1>
			<div className="flex overflow-x-auto whitespace-nowrap p-4  space-x-4 hide-scrollbar">
				{arr.map((ele, index) => (
					<div key={index} className="w-[375px] h-[643px] bg-[#dfdede] rounded-xl flex-shrink-0">
						{ele}
					</div>
				))}
			</div>
		</div>
	);
}

export default CatsAroundUs;
