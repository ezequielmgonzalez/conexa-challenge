import { useCharacterSelectionContext } from "../hooks/useCharacterSelectionContext";
import CharacterSelector from "./CharacterSelector";

export default function DualCharactersList() {
	const { charactersSelected, handleCharacterSelected } =
		useCharacterSelectionContext();

	return (
		<section className="flex flex-row">
			<CharacterSelector
				borderSelected="red"
				handleSelectedCharacter={(newChar) =>
					handleCharacterSelected(newChar, 0)
				}
				selected={charactersSelected[0]?.id}
			/>
			<CharacterSelector
				borderSelected="blue"
				handleSelectedCharacter={(newChar) =>
					handleCharacterSelected(newChar, 1)
				}
				selected={charactersSelected[1]?.id}
			/>
		</section>
	);
}
