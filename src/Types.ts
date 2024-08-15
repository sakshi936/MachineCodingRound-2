export type UserData = {
	data: {
		// username: string;
		gender: string;
		name: {
			title: string;
			first: string;
			last: string;
		};
		picture: { thumbnail: string };
		login: {
			username: string;
		};
		dob: {
			date: string;
		};
		cell: number;
		phone: string;

		registered: { date: string };
		location: {
			// city: string;

			street: {
				number: number;
				name: string;
			};
			city: string;
			state: string;
			country: string;
			postcode: string;
			coordinates: {
				latitude: number;
				longitude: number;
			};
			timezone: {
				offset: number;
				description: string;
			};
		};
	};
};

export type joke = {
	data: {
		content: string;
	};
};

export type Cats = {
	data: {
		data: [
			{
				// weight: {
				// 	imperial: "7  -  10";
				// 	metric: "3 - 5";
				// };
				id: number;
				name: String;
				// cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx";
				// vetstreet_url: "http://www.vetstreet.com/cats/abyssinian";
				// vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian";
				temperament: String;
				origin: String;
				// country_codes: "EG";
				// country_code: "EG";
				description: String;
				life_span: String;
				// indoor: 0;
				// lap: 1;
				// alt_names: "";
				// adaptability: 5;
				// affection_level: 5;
				// child_friendly: 3;
				// dog_friendly: 4;
				// energy_level: 5;
				// grooming: 1;
				// health_issues: 2;
				// intelligence: 5;
				// shedding_level: 2;
				// social_needs: 5;
				// stranger_friendly: 5;
				// vocalisation: 1;
				// experimental: 0;
				// hairless: 0;
				// natural: 1;
				// rare: 0;
				// rex: 0;
				// suppressed_tail: 0;
				// short_legs: 0;
				wikipedia_url: String;
				// hypoallergenic: 0;
				image: String;
			}
		];
	};
};
