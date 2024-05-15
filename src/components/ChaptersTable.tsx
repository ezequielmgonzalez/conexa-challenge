import { AccordionItem } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/Accordion";
import CharacterEpisodesList from "./CharacterEpisodesList";
import CharacterSharedEpisodesList from "./CharacterSharedEpisodesList";
import { useCharacterSelectionContext } from "../hooks/useCharacterSelectionContext";

export default function ChaptersTable() {
	const { charactersSelected } = useCharacterSelectionContext();
	const selectedCharacter1 = charactersSelected[0];
	const selectedCharacter2 = charactersSelected[1];

	return (
		selectedCharacter1 &&
		selectedCharacter2 && (
			<Accordion
				type="single"
				collapsible
				className="fixed bottom-0 bg-green-200 w-full max-h-[40%] overflow-auto"
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
