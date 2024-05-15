import ChaptersTable from "./components/ChaptersTable";
import DualCharactersList from "./components/DualCharactersList";
import { CharacterSelectionProvider } from "./context";

function App() {
	return (
		<CharacterSelectionProvider>
			<h1>Rick and Morty App!</h1>
			<DualCharactersList />
			<ChaptersTable />
		</CharacterSelectionProvider>
	);
}

export default App;
