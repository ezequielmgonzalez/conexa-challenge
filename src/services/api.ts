import type { ApiResponse, Character } from "../types/Character";

export async function getAllCharacters(): Promise<Character[]> {
	const results: Character[] = [];
	let nextUrl: string | null = "https://rickandmortyapi.com/api/character";
	try {
		while (nextUrl) {
			const res = await fetch(nextUrl);
			const jsonData = (await res.json()) as ApiResponse;

			results.push(...jsonData.results);
			nextUrl = jsonData.info.next;
		}
	} catch (error) {
		console.error("Error fetching characters:", error);
	}

	return results;
}
