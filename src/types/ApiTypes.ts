export interface ApiResponse<T> {
	info: Info;
	results: T[];
}

export interface Info {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface Episode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: Date;
}

export interface Character {
	id: number;
	name: string;
	status: Status;
	species: Species;
	type: string;
	gender: Gender;
	origin: Location;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface Location {
	name: string;
	url: string;
}

export enum Gender {
	Female = "Female",
	Male = "Male",
	Unknown = "unknown",
}

export enum Species {
	Alien = "Alien",
	Human = "Human",
}

export enum Status {
	Alive = "Alive",
	Dead = "Dead",
	Unknown = "unknown",
}
