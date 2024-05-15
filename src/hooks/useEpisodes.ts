import { useEffect, useMemo, useState } from "react";
import { getMultipleEpisodes } from "../services/api";
import { extractEpisodeNumbers } from "../services/episodes";
import { Episode } from "../types/ApiTypes";

export function useEpisodes(urls: string[]) {
	const [episodes, setEpisodes] = useState<Episode[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const episodeNumbers = useMemo(() => extractEpisodeNumbers(urls), [urls]);

	useEffect(() => {
		if (episodeNumbers.length > 0) {
			setLoading(true);
			setError(null);
			const fetchEpisodes = async () => {
				try {
					const newData = await getMultipleEpisodes(episodeNumbers);
					setEpisodes(newData);
					setLoading(false);
				} catch (e) {
					if (e instanceof Error) setError(e.message);
				}
			};

			fetchEpisodes();
		} else {
			setEpisodes([]);
		}
	}, [episodeNumbers]);

	return { episodes, loading, error };
}
