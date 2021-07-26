import CommonRenderer from '@dglinux/sites-common/lib/common-renderer';
import { isLinkRelativeMarkdown } from '@dglinux/sites-common/lib/utils';
import { extractFrontMatter } from '$lib/front-matter';
import fs from 'fs';

export class BlogRenderer extends CommonRenderer {
	constructor(options) {
		super(options);
	}

    // Solve relative links
    // e.g. 2020-10-30-join-2020.md -> /blog/news/2020/10/30/join-2020.md;
    // e.g. ./2020-10-30-join-2020.md -> /blog/news/2020/10/30/join-2020.md;
	link(href, title, text) {
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
		}
		return super.link(href, title, text);
	}
}
const renderer = new BlogRenderer();

export default renderer;
