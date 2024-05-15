import { createContext, useState, ReactNode } from "react";
import { Character } from "./types/ApiTypes";

// Define the type for children prop
type CharacterSelectionProviderProps = {
	children: ReactNode;
};

// Create the context
const CharacterSelectionContext = createContext<{
	charactersSelected: (Character | null)[];
	handleCharacterSelected: (
		newCharacter: Character,
		position: number
	) => void;
}>({
	charactersSelected: [null, null],
	handleCharacterSelected: () => {},
});

// Create the provider
const CharacterSelectionProvider = ({
	children,
}: CharacterSelectionProviderProps) => {
	const [charactersSelected, setCharactersSelected] = useState<
		(Character | null)[]
	>([null, null]);

	const handleCharacterSelected = (
		newCharacter: Character,
		position: number
	) => {
		setCharactersSelected((prevCharacters) => {
			const updatedCharacters = [...prevCharacters];
			updatedCharacters[position] = newCharacter;
			return updatedCharacters;
		});
	};

	return (
		<CharacterSelectionContext.Provider
			value={{
				charactersSelected,
				handleCharacterSelected,
			}}
		>
			{children}
		</CharacterSelectionContext.Provider>
	);
};

export { CharacterSelectionContext, CharacterSelectionProvider };
