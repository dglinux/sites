// Compiler will complain if I wrote these in TypeScript lol
export function convertFrontMatter(string) {
	const result = {};
	if (!string) return result;
	const entries = string.split('\n');
	entries.map((ent) => {
		const words = ent.split(':');
		const key = words[0].trim();
		const value = words.slice(1).join(':').trim();
		result[key] = value;
	});
	return result;
}

export function extractFrontMatter(markdown) {
	const regex = /---\r?\n([\s\S]+?)\r?\n---/;
	const match = regex.exec(markdown);
	if (!match) {
		return {
			content: markdown,
			data: null
		};
	}
	const content = markdown.slice(match[0].length);
	const metadata = convertFrontMatter(match[1]);
	return {
		content,
		metadata
	};
}
