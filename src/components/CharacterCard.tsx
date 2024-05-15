import { Character, Status } from "@/src/types/ApiTypes";

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
	const statusColorMap: Record<Status, string> = {
		[Status.Alive]: "text-green-500",
		[Status.Dead]: "text-red-500",
		[Status.Unknown]: "text-gray-500",
	};

	const borderColorClass = borderColorMap[borderSelected] || "";
	const getStatusColor = (status: Status) => {
		return statusColorMap[status] || "";
	};

	// const statusColor = getStatusColor(character.status);

	return (
		character?.status && (
			<div
				className={`shadow-sm bg-white flex flex-wrap cursor-pointer rounded-xl overflow-hidden border-2 ${
					selected ? borderColorClass : ""
				} hover:shadow-md transform transition duration-500 
				hover:scale-110 `}
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
				<div className="flex flex-col p-3 w-full">
					<span className="text-md font-semibold mx-auto text-center">
						{character.name}
					</span>
					<span className="text-sm text-center">
						<span
							className={`font-semibold ${getStatusColor(
								character.status
							)}`}
						>
							{character.status}
						</span>{" "}
						- {character.species}
					</span>
				</div>
			</div>
		)
	);
}
