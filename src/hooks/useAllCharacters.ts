import { useEffect, useState } from "react";
import { Character } from "../types/Character";
import { getAllCharacters } from "../services/api";

export default function useAllCharacters() {
	const [allCharacters, setAllCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
		getAllCharacters()
			.then((newCharacters) => setAllCharacters(newCharacters))
			.catch((e) => {
				if (e instanceof Error) setError(e.message);
			})
			.finally(() => setLoading(false));
	}, []);

	return {
		allCharacters,
		loading,
		error,
	};
}
