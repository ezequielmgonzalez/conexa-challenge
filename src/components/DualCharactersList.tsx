import CharacterSelector from "./CharacterSelector";

export default function DualCharactersList() {
	return (
		<section className="flex flex-row">
			<CharacterSelector borderSelected="red" />
			<CharacterSelector borderSelected="blue" />
		</section>
	);
}
