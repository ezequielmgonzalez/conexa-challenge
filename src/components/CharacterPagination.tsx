import { useEffect, useState } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./ui/Pagination";

interface CharacterPaginationProps {
	page: number;
	totalPages: number;
	handlePage: (newPage: number) => void;
}

export default function CharacterPagination({
	page,
	totalPages,
	handlePage,
}: CharacterPaginationProps) {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => handlePage(page - 1)}
						className={
							page == 1
								? "pointer-events-none opacity-50"
								: undefined
						}
					/>
				</PaginationItem>
				{isMobile && (
					<PaginationItem>
						<PaginationLink isActive>{page}</PaginationLink>
					</PaginationItem>
				)}
				{!isMobile && (
					<PaginationItem>
						<PaginationLink
							isActive={page == 1}
							onClick={() => handlePage(1)}
						>
							1
						</PaginationLink>
					</PaginationItem>
				)}

				{!isMobile && page > 1 && (
					<>
						{page > 2 && (
							<PaginationItem>
								<PaginationEllipsis className="cursor-not-allowed" />
							</PaginationItem>
						)}
						{page < totalPages && (
							<PaginationItem>
								<PaginationLink isActive>{page}</PaginationLink>
							</PaginationItem>
						)}
					</>
				)}
				{!isMobile && page < totalPages - 1 && (
					<PaginationItem>
						<PaginationEllipsis className="cursor-not-allowed" />
					</PaginationItem>
				)}

				{!isMobile && (
					<PaginationItem>
						<PaginationLink
							isActive={page == totalPages}
							onClick={() => handlePage(totalPages)}
						>
							{totalPages}
						</PaginationLink>
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationNext
						onClick={() => handlePage(page + 1)}
						className={
							page == totalPages
								? "pointer-events-none opacity-50"
								: undefined
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
