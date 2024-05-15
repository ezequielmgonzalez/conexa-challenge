import ChaptersTable from "./components/ChaptersTable";
import DualCharactersList from "./components/DualCharactersList";
import { CharacterSelectionProvider } from "./context";

function App() {
	return (
		<CharacterSelectionProvider>
			<h1 className="text-center w-full font-bold text-2xl pt-6 font-sans">
				Rick & Morty Character Tracker
			</h1>
			<DualCharactersList />
			<ChaptersTable />
		</CharacterSelectionProvider>
	);
}

export default App;
