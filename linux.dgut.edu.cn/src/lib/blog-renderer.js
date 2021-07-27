import CommonRenderer from '@dglinux/sites-common/lib/common-renderer';
import { isLinkRelativeMarkdown, isLinkRelative } from '@dglinux/sites-common/lib/utils';
import { extractFrontMatter } from '$lib/front-matter';
import fs from 'fs';

function isLinkRelativeAsset(link) {
	const seg = link.split('/');
	return isLinkRelative(link) && seg[1] === 'public';
}

// Relative static assets
// e.g. ../public/assets/git-1/download.png -> /assets/git-1/download.png
function solveRelativeAsset(link) {
	return '/' + link.split('/').slice(2).join('/');
}

export class BlogRenderer extends CommonRenderer {
	constructor(absoluteUrl, options) {
		super(options);
		this.absoluteUrl = absoluteUrl;
	}

    // Solve relative links
	link(href, title, text) {
		// Relative pages
		// e.g. 2020-10-30-join-2020.md -> /blog/news/2020/10/30/join-2020.md;
		// e.g. ./2020-10-30-join-2020.md -> /blog/news/2020/10/30/join-2020.md;
		if (isLinkRelativeMarkdown(href)) {
			const segs = href.split('/');
			const ref = segs[segs.length - 1].replace(/\.md$/, '');
			const splitted = ref.split('-');
			if (splitted.length >= 4) {
				const [year, month, date, ...words] = splitted;
				const slug = words.join('-');
                // To get the category, we need to read the referenced file
				const file = fs.readFileSync(`blog/${year}-${month}-${date}-${slug}.md`, 'utf-8');
				const { category } = extractFrontMatter(file).metadata;
				href = `/blog/${category}/${year}/${month}/${date}/${slug}`;
			}
		} else if (isLinkRelativeAsset(href)) {
			href = solveRelativeAsset(href);
		}
		return super.link(href, title, text);
	}

	image(href, title, text) {
		if (isLinkRelativeAsset(href)) {
			href = solveRelativeAsset(href);
		}
		return super.image(href, title, text);
	}
}
const renderer = new BlogRenderer();

export default renderer;
