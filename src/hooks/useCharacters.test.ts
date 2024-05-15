import { renderHook, act } from "@testing-library/react";
import { getCharacters } from "../services/api";
import useCharacters from "./useCharacters";

// Mocking the API function
jest.mock("../services/api", () => ({
	getCharacters: jest.fn(),
}));

describe("useCharacters", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should fetch characters and set state correctly", async () => {
		const mockData = {
			info: { pages: 2 },
			results: [
				{ id: 1, name: "Character 1" },
				{ id: 2, name: "Character 2" },
			],
		};
		(getCharacters as jest.Mock).mockResolvedValueOnce(mockData);
		const { result } = renderHook(() => useCharacters());
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.loading).toBe(false);
		expect(result.current.characters).toEqual(mockData.results);
		expect(result.current.totalPages).toBe(mockData.info.pages);
		expect(result.current.error).toBe(null);
	});

	test("should handle error correctly", async () => {
		const errorMessage = "Error fetching characters";
		(getCharacters as jest.Mock).mockRejectedValueOnce(
			new Error(errorMessage)
		);

		const { result } = renderHook(() => useCharacters());
		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.loading).toBe(false);
		expect(result.current.error).toContain(errorMessage);
		expect(result.current.characters).toEqual([]);
		expect(result.current.totalPages).toBe(0);
	});
});
