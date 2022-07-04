import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = (request) => {
	const KEY = 'max';
	const query = request.url.searchParams;
	const param = query.get(KEY);

	let max = 0;
	if (param !== null) {
		max = parseInt(param);
	}

	const rand = Math.floor(Math.random() * max);

	return {
		body: {
			random: rand
		}
	};
};
