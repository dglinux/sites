import marked from 'marked';
const defaultRenderer = new marked.Renderer();

function removeTags(string) {
	return string.replace(/<[^ ][^>]*>/g, '').replace(/<\/[^>]*>/g, '');
}

function extractorMarked(markdown, absoluteUrl) {
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

export default extractorMarked;
