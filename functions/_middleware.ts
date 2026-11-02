interface Env {
	ASSETS: { fetch: (request: Request) => Promise<Response> };
}

interface PagesContext {
	request: Request;
	env: Env;
	next: () => Promise<Response>;
}

export const onRequest = async (context: PagesContext): Promise<Response> => {
	const { request, env } = context;
	const response = await context.next();
	const url = new URL(request.url);
	const isHtmlNavigation = request.headers.get('accept')?.includes('text/html');

	if (
		request.method !== 'GET' ||
		response.status !== 404 ||
		!isHtmlNavigation ||
		url.pathname.startsWith('/api/') ||
		/\.[^/]+$/.test(url.pathname)
	) {
		return response;
	}

	const indexRequest = new Request(new URL('/index.html', url.origin), request);
	return env.ASSETS.fetch(indexRequest);
};
