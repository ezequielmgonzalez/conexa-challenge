import type { Character } from "../types/Character";

interface CharacterCardProps {
	character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
	return (
		<div className="flex flex-wrap w-[150px] rounded-xl border-2 overflow-hidden">
			<img
				src={character.image}
				alt="Character Image"
				className="object-cover"
			/>
			<div className="flex flex-col">
				<span>{character.name}</span>
				<span>
					{character.status} - {character.species}
				</span>
			</div>
		</div>
	);
}
