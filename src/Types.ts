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
