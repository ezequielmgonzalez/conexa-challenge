import { useEpisodes } from "../hooks/useEpisodes";
import type { Character } from "../types/ApiTypes";

interface CharacterEpisodesListProps {
	character: Character | null;
}

export default function CharacterEpisodesList({
	character,
}: CharacterEpisodesListProps) {
	const episodeUrls = character?.episode ?? [];
	const { episodes } = useEpisodes(episodeUrls);

	return (
		<div>
			{character ? (
				<>
					<h2>{character.name} Episodes:</h2>
					<ul></ul>
					{episodes.length > 0 &&
						episodes.map((episode) => (
							<li key={episode.id}>
								{episode.episode} - {episode.name}
							</li>
						))}
				</>
			) : (
				<h3>None character selected!</h3>
			)}
		</div>
	);
}
