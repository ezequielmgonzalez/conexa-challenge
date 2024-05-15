import { Character } from "../types/ApiTypes";
import CharacterSelector from "./CharacterSelector";

interface DualCharacterListProps {
	selectedCharacter1: Character | null;
	selectedCharacter2: Character | null;
	setSelectedCharacter1: React.Dispatch<
		React.SetStateAction<Character | null>
	>;
	setSelectedCharacter2: React.Dispatch<
		React.SetStateAction<Character | null>
	>;
}

export default function DualCharactersList({
	selectedCharacter1,
	selectedCharacter2,
	setSelectedCharacter1,
	setSelectedCharacter2,
}: DualCharacterListProps) {
	return (
		<section className="flex flex-row">
			<CharacterSelector
				borderSelected="red"
				selectedCharacter={selectedCharacter1}
				setSelectedCharacter={setSelectedCharacter1}
			/>
			<CharacterSelector
				borderSelected="blue"
				selectedCharacter={selectedCharacter2}
				setSelectedCharacter={setSelectedCharacter2}
			/>
		</section>
	);
}
