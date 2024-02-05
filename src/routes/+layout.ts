export const prerender = true;
export const trailingSlash = 'ignore';

export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};
