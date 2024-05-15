import CharacterPagination from "./CharacterPagination";
import CharactersList from "./CharactersList";
import type { Character } from "../types/ApiTypes";
import useCharacters from "../hooks/useCharacters";

interface CharacterSelectorProps {
	borderSelected: string;
	selectedCharacter: Character | null;
	setSelectedCharacter: React.Dispatch<
		React.SetStateAction<Character | null>
	>;
}

export default function CharacterSelector({
	borderSelected,
	selectedCharacter,
	setSelectedCharacter,
}: CharacterSelectorProps) {
	const { characters, page, totalPages, handlePage } = useCharacters();

	const handleCardClick = (character: Character) => {
		if (character.id !== selectedCharacter?.id) {
			setSelectedCharacter(character);
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
				selected={selectedCharacter?.id}
				onCardClick={(character: Character) =>
					handleCardClick(character)
				}
				borderSelected={borderSelected}
			/>
		</section>
	);
}
