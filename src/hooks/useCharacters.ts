import { useEffect, useState } from "react";
import { Character } from "../types/Character";
import { getCharacters } from "../services/api";

export default function useCharacters() {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState<number | undefined>(0);

	const handlePage = (newPage: number) => {
		setPage(newPage);
	};

	useEffect(() => {
		setLoading(true);
		setError(null);
		getCharacters(page)
			.then((newData) => {
				setTotalPages(newData?.info.pages);
				if (newData?.results) {
					setCharacters(newData.results);
				}
			})
			.catch((e) => {
				if (e instanceof Error) setError(e.message);
			})
			.finally(() => setLoading(false));
	}, [page]);

	return {
		characters,
		loading,
		error,
		totalPages,
		handlePage,
		page,
	};
}
