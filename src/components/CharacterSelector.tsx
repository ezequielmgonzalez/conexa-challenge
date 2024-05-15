import CharacterPagination from "./CharacterPagination";
import CharactersList from "./CharactersList";
import type { Character } from "../types/ApiTypes";
import useCharacters from "../hooks/useCharacters";
import { useCallback } from "react";
interface CharacterSelectorProps {
	borderSelected: string;
	handleSelectedCharacter: (newChar: Character) => void;
	selected?: number;
	title: string;
}

export default function CharacterSelector({
	borderSelected,
	handleSelectedCharacter,
	selected,
	title,
}: CharacterSelectorProps) {
	const { characters, page, totalPages, handlePage } = useCharacters();

	const handleCardClick = useCallback(
		(character: Character) => {
			if (character.id !== selected) {
				handleSelectedCharacter(character);
			}
		},
		[selected, handleSelectedCharacter]
	);

	return (
		<section className="flex flex-col justify-center w-full gap-4 pt-2 max-w-[40%]">
			<div className="flex flex-row items-center justify-between px-8 font-mono">
				<h3 className="align-middle">{title}</h3>

				<div className="self-end">
					<CharacterPagination
						page={page}
						totalPages={totalPages ?? 1}
						handlePage={handlePage}
					/>
				</div>
			</div>

			<CharactersList
				characters={characters}
				selected={selected}
				onCardClick={handleCardClick}
				borderSelected={borderSelected}
			/>
		</section>
	);
}
