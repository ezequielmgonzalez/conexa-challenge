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
					<h2 className="text-xl font-semibold pb-4">
						Shared Episodes Among:{" "}
						{characters.map((character, index) => (
							<span key={`character-${character.id}`}>
								{index === characters.length - 1 ? (
									<>{character.name}</>
								) : (
									<>
										{character.name}
										{index === characters.length - 2 ? (
											<>&nbsp;&amp;</>
										) : (
											","
										)}
										&nbsp;
									</>
								)}
							</span>
						))}
					</h2>
					<ul>
						{episodes.map((episode) => (
							<li key={episode.id} className="pb-3">
								<span className="text-lg">
									<strong>{episode.episode}</strong> -{" "}
									<span className="italic">
										{episode.name}
									</span>
								</span>
								<br />
								<strong>Air Date: </strong>
								{episode.air_date}
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
