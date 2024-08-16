import { useEffect, useState } from "react";
import { CatsDetails } from "../Types";
import { Link } from "react-router-dom";

function CatsAroundUs() {
	const [catData, setCatData] = useState<CatsDetails | null>(null);

	const getCatsDatafromAPI = async () => {
		const response = await fetch("https://api.freeapi.app/api/v1/public/cats?page=1&limit=4");
		const data = await response.json();

		setCatData(data);
	};

	useEffect(() => {
		getCatsDatafromAPI();
	}, []);

	const cats = catData?.data.data; // cats data

	const getArray = (str: string) => {
		return str.split(", ", 3);
	};

	return (
		<div className="bg-[url('/CatsAroundUs/bg.svg')] w-full h-full bg-[#828080] py-6 px-6">
			<div className="text-white font-bold w-full flex justify-between">
				<Link to={"/random-jokes"} className=" flex justify-items-end bg-blue-500 p-3 rounded-xl">
					&lt;- Random Jokes
				</Link>
			</div>
			<div className="text-3xl font-bold ml-4 flex  justify-between  mt-8">
				<h1>Cats Around Us</h1>
				<img src="/Random-User/chai.png" alt="chai" width={60} height={60} />
			</div>
			{!cats ? (
				<p>Downloading...</p>
			) : (
				<div className="flex overflow-x-auto whitespace-nowrap p-4  space-x-4 hide-scrollbar">
					{cats?.map((cat) => (
						<div key={cat.id} className="w-[375px] h-[643px] bg-[#fbf4f4] rounded-xl flex-shrink-0 flex flex-col space-y-2">
							<img src={`${cat.image}`} alt="cats" className=" rounded-t-xl w-[375px] h-[325px]" />
							<div className="px-3 text-black">
								<p className="text-2xl font-semibold">{cat.name}</p>
								<p className=" whitespace-normal text-[13px] mt-2">{cat.description}</p>
								<p className="text-sm mt-2">
									<span className="mr-12 font-semibold">Origin</span>
									{cat.origin}
								</p>
								<p className="mt-1 font-semibold">Temperament</p>
								<div className=" mt-1 flex  space-x-4 text-xs ">
									{getArray(cat.temperament).map((temperament) => (
										<p className="bg-[#dedcdc] hover:bg-purple-300 hover:cursor-pointer px-2 py-1 rounded-full">{temperament}</p>
									))}
								</div>
								<p className="text-sm mt-2">
									<span className="mr-8 font-semibold">Life Span</span>
									{cat.life_span}
								</p>
							</div>
							<a href={cat.wikipedia_url} target="_blank" className="text-blue-400 text-sm ml-3">
								Learn More
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default CatsAroundUs;
