import type { ApiResponse, Character, Episode } from "../types/ApiTypes";

export async function getCharacters(
	page: number
): Promise<ApiResponse<Character> | null> {
	const url = `https://rickandmortyapi.com/api/character?page=${page}`;
	let data: ApiResponse<Character> | null = null;
	try {
		const res = await fetch(url);
		data = await res.json();
	} catch (error) {
		console.error("Error fetching characters:", error);
	}

	return data;
}

export async function getEpisode(episodeId: number): Promise<Episode | null> {
	const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
	let results: Episode | null = null;
	try {
		const res = await fetch(url);
		results = await res.json();
	} catch (error) {
		console.error("Error fetching episode");
	}

	return results;
}

export async function getMultipleEpisodes(
	episodeIds: number[]
): Promise<Episode[]> {
	const parsedIds = episodeIds.join(", ");
	const url = `https://rickandmortyapi.com/api/episode/${parsedIds}`;
	const results: Episode[] = [];

	try {
		const res = await fetch(url);
		const newData: Episode | Episode[] = await res.json();
		const episodesArray = Array.isArray(newData) ? newData : [newData];
		results.push(...episodesArray);
	} catch (error) {
		console.error("Error fetching episode");
	}

	return results;
}
