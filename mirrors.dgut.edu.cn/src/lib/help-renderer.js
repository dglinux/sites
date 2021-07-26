import { table, defaultRenderer } from '@dglinux/sites-common/lib/renderers';
import marked from 'marked';

function removeTags(string) {
	return string.replace(/<[^ ][^>]*>/g, '').replace(/<\/[^>]*>/g, '');
}

export default function helpRenderer(absoluteUrl) {
	const renderer = new marked.Renderer();
	const store = {
		title: null
	};

	renderer.table = table;

	// Rewrite relative links to absolute links
	renderer.link = (href, title, text) => {
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
	renderer.heading = (text, level, raw, slugger) => {
		if (level == 1 && !store.title) {
			store.title = removeTags(text);
		}
		const slug = slugger.slug(raw);
		return `<h${level} id="${slug}">${text}</h${level}>\n`;
	};

	return [renderer, store];
}
