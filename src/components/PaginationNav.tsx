"use client";

import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface PaginationNavProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	maxVisiblePages?: number;
	className?: string;
}

export default function PaginationNav({ currentPage, totalPages, onPageChange, maxVisiblePages = 5, className = "" }: PaginationNavProps) {
	const [visiblePages, setVisiblePages] = useState<number[]>([]);

	useEffect(() => {
		// Calculate which page numbers to display
		const calculateVisiblePages = () => {
			// If we have fewer pages than the max we want to show
			if (totalPages <= maxVisiblePages) {
				return Array.from({ length: totalPages }, (_, i) => i + 1);
			}

			// Calculate the range of pages to show
			let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
			let endPage = startPage + maxVisiblePages - 1;

			// Adjust if we're near the end
			if (endPage > totalPages) {
				endPage = totalPages;
				startPage = Math.max(1, endPage - maxVisiblePages + 1);
			}

			return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
		};

		setVisiblePages(calculateVisiblePages());
	}, [currentPage, totalPages, maxVisiblePages]);

	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages && page !== currentPage) {
			onPageChange(page);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const goToFirstPage = () => {
		if (currentPage !== 1) {
			onPageChange(1);
		}
	};

	const goToLastPage = () => {
		if (currentPage !== totalPages) {
			onPageChange(totalPages);
		}
	};

	if (totalPages <= 1) return null;

	return (
		<nav
			className={`flex items-center justify-center space-x-1 ${className}`}
			aria-label="Pagination"
		>
			{/* First page button */}
			<button
				onClick={goToFirstPage}
				disabled={currentPage === 1}
				className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors
        ${
			currentPage === 1
				? "cursor-not-allowed text-muted-foreground opacity-50"
				: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		}`}
				aria-label="Go to first page"
			>
				<FaAngleDoubleLeft className="h-3 w-3" />
			</button>

			{/* Previous page button */}
			<button
				onClick={goToPreviousPage}
				disabled={currentPage === 1}
				className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors
        ${
			currentPage === 1
				? "cursor-not-allowed text-muted-foreground opacity-50"
				: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		}`}
				aria-label="Go to previous page"
			>
				<FaAngleLeft className="h-4 w-4" />
			</button>

			{/* First page and ellipsis if needed */}
			{visiblePages[0] > 1 && (
				<>
					<button
						onClick={() => goToPage(1)}
						className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						aria-label="Go to page 1"
					>
						1
					</button>
					{visiblePages[0] > 2 && <span className="inline-flex h-8 w-8 items-center justify-center text-sm text-muted-foreground">...</span>}
				</>
			)}

			{/* Page numbers */}
			{visiblePages.map((page) => (
				<button
					key={page}
					onClick={() => goToPage(page)}
					className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors
          ${page === currentPage ? "bg-primary text-white" : "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"}`}
					aria-label={`Go to page ${page}`}
					aria-current={page === currentPage ? "page" : undefined}
				>
					{page}
				</button>
			))}

			{/* Last page and ellipsis if needed */}
			{visiblePages[visiblePages.length - 1] < totalPages && (
				<>
					{visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className="inline-flex h-8 w-8 items-center justify-center text-sm text-muted-foreground">...</span>}
					<button
						onClick={() => goToPage(totalPages)}
						className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
						aria-label={`Go to page ${totalPages}`}
					>
						{totalPages}
					</button>
				</>
			)}

			{/* Next page button */}
			<button
				onClick={goToNextPage}
				disabled={currentPage === totalPages}
				className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors
        ${
			currentPage === totalPages
				? "cursor-not-allowed text-muted-foreground opacity-50"
				: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		}`}
				aria-label="Go to next page"
			>
				<FaAngleRight className="h-4 w-4" />
			</button>

			{/* Last page button */}
			<button
				onClick={goToLastPage}
				disabled={currentPage === totalPages}
				className={`inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors
        ${
			currentPage === totalPages
				? "cursor-not-allowed text-muted-foreground opacity-50"
				: "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		}`}
				aria-label="Go to last page"
			>
				<FaAngleDoubleRight className="h-3 w-3" />
			</button>
		</nav>
	);
}
