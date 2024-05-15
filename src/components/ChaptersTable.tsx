import { AccordionItem } from "@radix-ui/react-accordion";
import type { Character } from "../types/ApiTypes";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/Accordion";
import CharacterEpisodesList from "./CharacterEpisodesList";
import CharacterSharedEpisodesList from "./CharacterSharedEpisodesList";

interface ChaptersTableProps {
	selectedCharacter1: Character | null;
	selectedCharacter2: Character | null;
}

export default function ChaptersTable({
	selectedCharacter1,
	selectedCharacter2,
}: ChaptersTableProps) {
	return (
		selectedCharacter1 &&
		selectedCharacter2 && (
			<Accordion
				type="single"
				collapsible
				className="absolute bottom-0 bg-green-200 w-full max-h-[40%] overflow-auto"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-center justify-center">
						Chapters
					</AccordionTrigger>
					<AccordionContent className="flex flex-row justify-between">
						<CharacterEpisodesList character={selectedCharacter1} />
						<CharacterSharedEpisodesList
							characters={[
								selectedCharacter1,
								selectedCharacter2,
							]}
						/>
						<CharacterEpisodesList character={selectedCharacter2} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		)
	);
}
