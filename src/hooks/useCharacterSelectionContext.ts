import { useContext } from "react";
import { CharacterSelectionContext } from "../context";

export const useCharacterSelectionContext = () => {
	const context = useContext(CharacterSelectionContext);
	if (!context) {
		throw new Error(
			"useCharacterSelectionContext must be used within a CharacterSelectionProvider"
		);
	}

	return context;
};
