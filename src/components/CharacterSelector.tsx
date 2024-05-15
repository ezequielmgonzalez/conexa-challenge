import CharacterPagination from "./CharacterPagination";
import CharactersList from "./CharactersList";
import type { Character } from "../types/ApiTypes";
import useCharacters from "../hooks/useCharacters";
interface CharacterSelectorProps {
	borderSelected: string;
	handleSelectedCharacter: (newChar: Character) => void;
	selected?: number;
}

export default function CharacterSelector({
	borderSelected,
	handleSelectedCharacter,
	selected,
}: CharacterSelectorProps) {
	const { characters, page, totalPages, handlePage } = useCharacters();

	const handleCardClick = (character: Character) => {
		if (character.id !== selected) {
			handleSelectedCharacter(character);
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
				selected={selected}
				onCardClick={(character: Character) =>
					handleCardClick(character)
				}
				borderSelected={borderSelected}
			/>
		</section>
	);
}
