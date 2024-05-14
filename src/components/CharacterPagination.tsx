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
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious onClick={() => handlePage(page - 1)} />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						isActive={page == 1}
						onClick={() => handlePage(1)}
					>
						1
					</PaginationLink>
				</PaginationItem>
				{page > 1 && (
					<>
						{page > 2 && (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						)}
						{page < totalPages && (
							<PaginationItem>
								<PaginationLink isActive>{page}</PaginationLink>
							</PaginationItem>
						)}
					</>
				)}
				{page < totalPages - 1 && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationLink
						isActive={page == totalPages}
						onClick={() => handlePage(totalPages)}
					>
						{totalPages}
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext onClick={() => handlePage(page + 1)} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
