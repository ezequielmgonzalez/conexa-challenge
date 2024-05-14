import { useId } from "react";
import { Character } from "../types/Character";
import CharacterCard from "./CharacterCard";

interface CharactersListProps {
	characters: Character[];
	selected?: number;
	onCardClick: ((id: Character) => void) | undefined;
	borderSelected: string;
}

export default function CharactersList({
	characters,
	selected,
	onCardClick = undefined,
	borderSelected,
}: CharactersListProps) {
	const id = useId();

	return (
		<section className="flex flex-row flex-wrap gap-4">
			{characters.map((character) => (
				<CharacterCard
					character={character}
					key={`${character.id}-${id}`}
					onClick={onCardClick}
					selected={character.id == selected}
					borderSelected={borderSelected}
				/>
			))}
		</section>
	);
}
