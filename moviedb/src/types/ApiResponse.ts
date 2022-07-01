import type { Movie } from './Movie';

export interface ApiResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}