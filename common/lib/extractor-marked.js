import marked from 'marked';
const defaultRenderer = new marked.Renderer();

function removeTags(string) {
	return string.replace(/<[^ ][^>]*>/g, '').replace(/<\/[^>]*>/g, '');
}

// Compiler will complain if I wrote these in TypeScript lol
export function convertFrontMatter(string) {
	const result = {};
	if (!string) return result;
	const entries = string.split('\n');
	entries.map(ent => {
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
	return {
		content,
		data: match[1]
	};
}

export function altMarked(markdown, absoluteUrl) {
	const extractorRenderer = new marked.Renderer();

	let title = null;

	// Make table horizontally scrollable
	extractorRenderer.table = (header, body) => {
		return '<div class="table-container">' + defaultRenderer.table(header, body) + '</div>';
	};

	// Rewrite relative links to absolute links
	extractorRenderer.link = (href, title, text) => {
		if (href.endsWith('.md') && !href.startsWith('/') && !href.includes('://')) {
			href = href.replace(/\.md$/, '');
			let absSeg = absoluteUrl.split('/');
			let hrefSeg = href.split('/');
			absSeg.pop();
			const length = hrefSeg.length;
			for (let i = 0; i < length; i++) {
				const part = hrefSeg[0];
				if (part === '.') {
					hrefSeg.shift();
					continue;
				}
				if (part === '..') {
					hrefSeg.shift();
					absSeg.pop();
					continue;
				}
				break;
			}
			href = absSeg.concat(hrefSeg).join('/');
		}
		return defaultRenderer.link(href, title, text);
	};

	// Extract the title
	extractorRenderer.heading = (text, level, raw, slugger) => {
		if (level == 1 && !title) {
			title = removeTags(text);
		}
		const slug = slugger.slug(raw);
		return `<h${level} id="${slug}">${text}</h${level}>\n`;
	};

	const html = marked(markdown, { renderer: extractorRenderer });

	return {
		html,
		title
	};
}

function extractorMarked(markdown, absoluteUrl) {
	const { content, data } = extractFrontMatter(markdown);
	const metadata = convertFrontMatter(data);
	const { html, title } = altMarked(content, absoluteUrl);
	if (!('title' in metadata)) {
		metadata.title = title;
	}
	return {
		html,
		metadata
	};
}

export default extractorMarked;
