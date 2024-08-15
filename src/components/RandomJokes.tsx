import { useEffect, useState } from "react";
import { joke } from "../Types";

function RandomJokes() {
	const [Jokedata, setJokeData] = useState<joke | null>(null);

	async function GetJokesFromAPI() {
		const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
		const data = await response.json();
		setJokeData(data);
	}

	const randomNum = () => {
		const num = (Math.random() * 10).toFixed(1);
		return num;
	};

	useEffect(() => {
		GetJokesFromAPI();
	}, []);

	return (
		<div className="bg-[url('/Random-Jokes/bg.png')]  w-full h-screen flex  flex-col justify-center items-center px-6">
			{/* twitter post section */}
			<section className="bg-black w-1/2 h-fit p-5 rounded-2xl">
				{/* top */}
				<div className="flex justify-start gap-6  ">
					<img src="/Random-Jokes/arrow.svg" alt="arrow" />
					<span className="font-bold">POST</span>
				</div>
				{/* user details(elon musk) */}
				<div className=" mt-5 flex justify-between">
					<div className="flex items-center gap-2">
						<img src="/Random-Jokes/elonmusk.png" alt="elonmusk" width={70} height={70} />
						<div>
							<p className="font-bold text-lg flex gap-1">
								Elon Musk <img src="/Random-Jokes/bluetick.svg" alt="bluetick" width={20} height={20} />
							</p>
							<p className="text-[#707072] font-medium">@elonmusk</p>
						</div>
					</div>
					<img src="/Random-Jokes/dots.svg" alt="dots" />
				</div>
				{/* content(jokes) */}
				<p className="mt-4 text-base">{Jokedata ? Jokedata.data.content : "Loading..."}</p>
				<p className="mt-4 text-[#707072] text-sm">
					11:18 PM · Jul 30, 2024 ·<span className="text-white">20.5M</span> Views
				</p>
				{/* icons */}
				<div className="border-y-[1px] border-[#707072] mt-4 text-[#707072] text-sm flex justify-between p-4">
					<p className="flex justify-center items-center gap-1">
						<img src="/Random-Jokes/comment.svg" alt="comment" width={15} height={15} />
						{randomNum()}k
					</p>
					<p className="flex justify-center items-center gap-1">
						<img src="/Random-Jokes/view.svg" alt="comment" width={15} height={15} />
						{randomNum()}k
					</p>
					<p className="flex justify-center items-center gap-1">
						<img src="/Random-Jokes/like.svg" alt="comment" width={15} height={15} />
						{randomNum()}k
					</p>
					<p className="flex justify-center items-center gap-1">
						<img src="/Random-Jokes/save.svg" alt="comment" width={10} height={10} />
						{randomNum()}k
					</p>
					<p className="flex justify-center items-center gap-1">
						<img src="/Random-Jokes/share.svg" alt="comment" width={15} height={15} />
					</p>
				</div>
				<p className="text-center mt-3 text-[#707072] font-semibold">© chai aur code</p>
			</section>
			<footer className="w-full relative top-10 flex justify-end">
				<a href="https://chaicode.com/" target="_blank">
					<img src="/Random-User/chai.png" alt="chai" width={60} height={60} />
				</a>
			</footer>
		</div>
	);
}

export default RandomJokes;
