import { useState } from "react";
import CharacterPagination from "./CharacterPagination";
import CharactersList from "./CharactersList";
import type { Character } from "../types/Character";
import useCharacters from "../hooks/useCharacters";

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
		console.log("Handleando el card click, new selectted: ", character);
		setCharacterSelected(character);
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
		</section>
	);
}
