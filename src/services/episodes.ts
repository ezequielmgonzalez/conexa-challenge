export function extractEpisodeNumbers(episodeUrls: string[]): number[] {
	const episodeNumbers: number[] = [];
	const regex = /\/episode\/(\d+)$/;

	episodeUrls.forEach((url) => {
		const match = url.match(regex);
		if (match && match[1]) {
			episodeNumbers.push(parseInt(match[1]));
		}
	});

	return episodeNumbers;
}
