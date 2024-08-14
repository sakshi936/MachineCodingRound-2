import { useEffect, useState } from "react";
import { UserData } from "../Types";

function RandomUser() {
	const [Userdata, setData] = useState<UserData | null>(null);
	async function GetRandomUserFromAPI() {
		const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random");
		const data = await response.json();

		setData(data);
	}

	useEffect(() => {
		GetRandomUserFromAPI();
	}, []);

	function formatDate(dateString: string = "1960-03-20T22:03:42.758Z") {
		const date = new Date(dateString);

		const options: Intl.DateTimeFormatOptions = {
			day: "numeric",
			month: "long",
			year: "numeric",
		};

		return date.toLocaleDateString("en-GB", options);
	}

	return (
		<div className="bg-[url('/Random-User/bg1.svg')] object-cover w-full h-full  py-8 flex justify-center items-center text-black">
			{/*  profile card */}
			<div className="w-[360px] h-[610px] bg-[#B6B3F3] rounded-3xl border-[8px] border-white p-4 flex flex-col justify-between">
				{!Userdata ? (
					"Downloading..."
				) : (
					<section>
						{/* profile Overview */}
						<div className="flex justify-between">
							<img src="/Random-User/arrow.svg " alt="Back" />
							<p className="font-serif ">Profile Overview</p>
							<button onClick={GetRandomUserFromAPI} className="w-fit">
								<img src="/Random-User/refresh.svg" alt="refresh" />
							</button>
						</div>

						{/* profile */}
						<div className="flex flex-col items-center mt-10 gap-y-1">
							<div className="flex ml-8">
								<img src={Userdata?.data.picture.thumbnail} alt="Profile Pic" width={100} height={100} className="rounded-full" />
								<span className="bg-black text-white w-fit h-fit px-2 rounded-xl text-[10px]">{Userdata?.data.name.title}</span>
							</div>
							<p className="font-normal text-2xl font-serif">{Userdata?.data.name.first}</p>
							<p className=" text-xs font-sans">{Userdata?.data.login.username}</p>
						</div>

						{/* Call&Location */}
						<div className="border-y-[1px] border-slate-400 flex justify-center items-center gap-5 text-sm mt-6 py-3">
							<a
								className="flex items-center gap-1"
								href={`https://www.google.com/maps?q=${Userdata?.data.location.coordinates.latitude},${Userdata?.data.location.coordinates.longitude}`}
								target="_blank"
							>
								<img src="/Random-User/location.svg" alt="location" width={20} height={20} />
								Location
							</a>

							<a href={`tel:${Userdata?.data.cell}`} className="flex items-center gap-1" target="_blank">
								<img src="/Random-User/phone.svg" alt="phone" width={20} height={20} />
								Call me
							</a>
						</div>

						{/* Other details */}

						<div className="flex justify-between mt-5">
							<ul className="w-1/2 flex flex-col">
								<li>
									<span className="text-[12px] text-slate-800 font-sans">City</span>
									<p className="font-semimbold text-lg font-sans">{Userdata?.data.location.city}</p>
								</li>
								<li>
									<span className="text-[12px] text-slate-800 font-sans">Date of Birth</span>
									<p className="font-semimbold text-lg font-sans">{formatDate(Userdata?.data.dob.date)}</p>
								</li>
								<li>
									<span className="text-[12px] text-slate-800 font-sans">Time Zone</span>
									<p className="font-semimbold text-lg font-sans">
										{Userdata?.data.location.timezone.offset}({Userdata?.data.location.country})
									</p>
								</li>
							</ul>
							<ul className="w-fit flex flex-col">
								<li>
									<span className="text-[12px] text-slate-800 font-sans">Nationality</span>
									<p className="font-semimbold text-lg font-sans">{Userdata?.data.location.country}</p>
								</li>

								<li>
									<span className="text-[12px] text-slate-800 font-sans">Phone no.</span>
									<p className="font-semimbold text-lg font-sans">{Userdata?.data.cell}</p>
								</li>

								<li>
									<span className="text-[12px] text-slate-800 font-sans">Registered Since</span>
									<p className="font-semimbold text-lg font-sans">{formatDate(Userdata?.data.registered.date)}</p>
								</li>
							</ul>
						</div>
					</section>
				)}
				{/* chai code section */}
				<footer className="flex items-end justify-end gap-12 ">
					<span className="text-white text-sm">© chai aur code</span>
					<a href="https://chaicode.com/" target="_blank">
						<img src="/Random-User/chai.png" alt="chai" width={60} height={60} />
					</a>
				</footer>
			</div>
		</div>
	);
}

export default RandomUser;
