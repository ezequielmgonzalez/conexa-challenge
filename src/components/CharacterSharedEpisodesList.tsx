import { useEffect, useState } from "react";
import { useEpisodes } from "../hooks/useEpisodes";
import type { Character } from "../types/ApiTypes";

interface CharacterSharedEpisodesListProps {
	characters: Character[];
}

export default function CharacterSharedEpisodesList({
	characters,
}: CharacterSharedEpisodesListProps) {
	const [sharedUrls, setSharedUrls] = useState<string[]>([]);

	useEffect(() => {
		const episodeUrlsList = characters.map((char) => char.episode);
		const newSharedUrls = episodeUrlsList.reduce((acc, urls) => {
			if (acc.length === 0) {
				return urls;
			}
			return acc.filter((url) => urls.includes(url));
		}, []);
		setSharedUrls(newSharedUrls);
	}, [characters]);

	const { episodes } = useEpisodes(sharedUrls);

	return (
		<div>
			{episodes.length > 0 ? (
				<>
					<h2>
						Shared Episodes Among:
						{characters.map((character) => (
							<span key={`character-${character.id}`}>
								{character.name},
							</span>
						))}
					</h2>
					<ul>
						{episodes.map((episode) => (
							<li key={`episode-${episode.id}`}>
								{episode.episode} - {episode.name}
							</li>
						))}
					</ul>
				</>
			) : (
				<h3>No shared episodes found!</h3>
			)}
		</div>
	);
}
