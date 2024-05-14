import type { ApiResponse } from "../types/Character";

export async function getCharacters(page: number): Promise<ApiResponse | null> {
	const url = `https://rickandmortyapi.com/api/character?page=${page}`;
	let data: ApiResponse | null = null;
	try {
		const res = await fetch(url);
		data = await res.json();
	} catch (error) {
		console.error("Error fetching characters:", error);
	}

	return data;
}
