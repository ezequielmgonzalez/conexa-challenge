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
			getMultipleEpisodes(episodeNumbers)
				.then((newData) => {
					setEpisodes(newData);
				})
				.catch((e) => {
					if (e instanceof Error) setError(e.message);
				})
				.finally(() => setLoading(false));
		} else {
			setEpisodes([]);
		}
	}, [episodeNumbers]);

	return { episodes, loading, error };
}
