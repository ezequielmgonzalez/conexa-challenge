import type { Character } from "@/src/types/Character";

interface CharacterCardProps {
	character: Character;
	selected?: boolean;
	onClick: ((character: Character) => void) | undefined;
	borderSelected: string;
}

export default function CharacterCard({
	character,
	selected = false,
	onClick = undefined,
	borderSelected = "",
}: CharacterCardProps) {
	const borderColorMap: Record<string, string> = {
		blue: "border-blue-500",
		red: "border-red-500",
	};

	const borderColorClass = borderColorMap[borderSelected] || "";

	return (
		<div
			className={`flex flex-wrap cursor-pointer w-[150px] rounded-xl overflow-hidden border-2 ${
				selected ? borderColorClass : ""
			}`}
			onClick={(e) => {
				e.preventDefault();
				if (onClick != undefined) onClick(character);
			}}
		>
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
