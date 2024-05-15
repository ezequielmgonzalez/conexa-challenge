import { useEffect, useState } from "react";
import { Character } from "../types/ApiTypes";
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

	const memoizedGetCharacters = async (pageNum: number) => {
		const cacheKey = `page_${pageNum}`;
		if (localStorage.getItem(cacheKey)) {
			return JSON.parse(localStorage.getItem(cacheKey)!);
		} else {
			try {
				const newData = await getCharacters(pageNum);
				localStorage.setItem(cacheKey, JSON.stringify(newData));
				return newData;
			} catch (e) {
				throw new Error("Failed to fetch data");
			}
		}
	};

	useEffect(() => {
		setLoading(true);
		setError(null);
		memoizedGetCharacters(page)
			.then((newData) => {
				if (newData) {
					setTotalPages(newData.info.pages);
					setCharacters(newData.results);
				} else {
					throw new Error("Failed to fetch data");
				}
			})
			.catch((e: Error) => {
				setError(e.message);
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
