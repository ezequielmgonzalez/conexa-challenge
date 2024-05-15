import { useEpisodes } from "../hooks/useEpisodes";
import type { Character } from "../types/ApiTypes";

interface CharacterEpisodesListProps {
	character: Character | null;
}

export default function CharacterEpisodesList({
	character,
}: CharacterEpisodesListProps) {
	const episodeUrls = character?.episode ?? [];
	const { episodes, loading } = useEpisodes(episodeUrls);

	return (
		<div>
			{character ? (
				<>
					<h2 className="text-xl font-semibold pb-4">
						{character.name} Episodes:
					</h2>
					<ul>
						{!loading ? (
							episodes.map((episode) => (
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
							))
						) : (
							<p>Loading...</p>
						)}
					</ul>
				</>
			) : (
				<h3>None character selected!</h3>
			)}
		</div>
	);
}
