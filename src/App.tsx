import { useState } from "react";
import ChaptersTable from "./components/ChaptersTable";
import DualCharactersList from "./components/DualCharactersList";
// import { CharacterSelectionProvider } from "./context";
import type { Character } from "./types/ApiTypes";

function App() {
	const [selectedCharacter1, setSelectedCharacter1] =
		useState<Character | null>(null);
	const [selectedCharacter2, setSelectedCharacter2] =
		useState<Character | null>(null);

	return (
		// <CharacterSelectionProvider>
		<>
			<h1>Rick and Morty App!</h1>
			<DualCharactersList
				selectedCharacter1={selectedCharacter1}
				selectedCharacter2={selectedCharacter2}
				setSelectedCharacter1={setSelectedCharacter1}
				setSelectedCharacter2={setSelectedCharacter2}
			/>
			<ChaptersTable
				selectedCharacter1={selectedCharacter1}
				selectedCharacter2={selectedCharacter2}
			/>
		</>
		// </CharacterSelectionProvider>
	);
}

export default App;
