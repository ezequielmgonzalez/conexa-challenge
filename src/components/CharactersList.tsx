import useAllCharacters from "../hooks/useAllCharacters";
import CharacterCard from "./CharacterCard";

export default function CharactersList() {
	const { allCharacters, loading } = useAllCharacters();

	return (
		<section className="flex flex-row flex-wrap gap-4">
			{loading ? (
				<p>Loading...</p>
			) : (
				allCharacters.map((character) => (
					<CharacterCard character={character} />
				))
			)}
		</section>
	);
}
