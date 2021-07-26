import CommonRenderer from '@dglinux/sites-common/lib/common-renderer';
import { removeTags, isLinkRelativeMarkdown } from '@dglinux/sites-common/lib/utils';

export default class HelpRenderer extends CommonRenderer {
	store = {
		title: null
	};

	constructor(absoluteUrl, options) {
		super(options);
		this.absoluteUrl = absoluteUrl;
	}

	// Rewrite relative links to absolute links
	link(href, title, text) {
		if (isLinkRelativeMarkdown(href)) {
			href = href.replace(/\.md$/, '');
			let absSeg = this.absoluteUrl.split('/');
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
		return super.link(href, title, text);
	}

	// Extract the title
	heading(text, level, raw, slugger) {
		if (level == 1 && !this.store.title) {
			this.store.title = removeTags(text);
		}
		const slug = slugger.slug(raw);
		return `<h${level} id="${slug}">${text}</h${level}>\n`;
	}
}
