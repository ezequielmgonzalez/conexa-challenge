import { useState } from "react";
import CharacterPagination from "./CharacterPagination";
import CharactersList from "./CharactersList";
import type { Character } from "../types/ApiTypes";
import useCharacters from "../hooks/useCharacters";
import CharacterEpisodesList from "./CharacterEpisodesList";

interface CharacterSelectorProps {
	borderSelected: string;
}

export default function CharacterSelector({
	borderSelected,
}: CharacterSelectorProps) {
	const { characters, page, totalPages, handlePage } = useCharacters();

	const [characterSelected, setCharacterSelected] =
		useState<Character | null>(null);

	const handleCardClick = (character: Character) => {
		if (character.id !== characterSelected?.id) {
			setCharacterSelected(character);
		}
	};

	return (
		<section>
			<CharacterPagination
				page={page}
				totalPages={totalPages ?? 1}
				handlePage={handlePage}
			/>
			<CharactersList
				characters={characters}
				selected={characterSelected?.id}
				onCardClick={(character: Character) =>
					handleCardClick(character)
				}
				borderSelected={borderSelected}
			/>
			{characterSelected && (
				<CharacterEpisodesList character={characterSelected} />
			)}
		</section>
	);
}
