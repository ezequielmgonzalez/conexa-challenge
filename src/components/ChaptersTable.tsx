import { AccordionItem } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/Accordion";
import CharacterEpisodesList from "./CharacterEpisodesList";
import CharacterSharedEpisodesList from "./CharacterSharedEpisodesList";
import { useCharacterSelectionContext } from "../hooks/useCharacterSelectionContext";
import { useEffect, useState } from "react";

export default function ChaptersTable() {
	const { charactersSelected } = useCharacterSelectionContext();
	const selectedCharacter1 = charactersSelected[0];
	const selectedCharacter2 = charactersSelected[1];

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (selectedCharacter1 && selectedCharacter2) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [selectedCharacter1, selectedCharacter2]);

	return (
		selectedCharacter1 &&
		selectedCharacter2 && (
			<Accordion
				type="single"
				collapsible
				className={`font-mono fixed bottom-0 bg-green-200 w-full max-h-[40%] overflow-auto transition-transform duration-1000 transform ${
					isVisible ? "translate-y-0" : "translate-y-full"
				}`}
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-center justify-center text-2xl">
						Episodes
					</AccordionTrigger>
					<AccordionContent className="flex flex-row justify-between px-10">
						<div className="basis-1/3">
							<CharacterEpisodesList
								character={selectedCharacter1}
							/>
						</div>
						<div className="basis-1/3 text-center">
							<CharacterSharedEpisodesList
								characters={[
									selectedCharacter1,
									selectedCharacter2,
								]}
							/>
						</div>
						<div className="basis-1/3 text-end">
							<CharacterEpisodesList
								character={selectedCharacter2}
							/>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		)
	);
}
