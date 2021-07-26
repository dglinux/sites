import fs from 'fs';
import extractorMarked from '@dglinux/sites-common/lib/extractor-marked';

function dateToTime(date) {
    return new Date(...date).getTime();
}

export default async function getPosts(withHtml = false) {
    const files = await fs.promises.readdir('blog');
    const posts = await Promise.all(
        files.map(async (post) => {
            const [year, month, date, ...words] = post.split('-');
            const slug = words.join('-').split(/\.md$/)[0];
            const file = await fs.promises.readFile(`blog/${post}`, 'utf-8');
            const { metadata, html } = extractorMarked(file);
            metadata.date = [parseInt(year), parseInt(month) - 1, parseInt(date)];
            const url = `/blog/${metadata.category}/${year}/${month}/${date}/${slug}`;
            if (withHtml) {
                return {
                    url,
                    metadata,
                    html
                };
            }
            return {
                url,
                metadata
            };
        })
    );
    posts.sort((a, b) => dateToTime(b.metadata.date) - dateToTime(a.metadata.date));
    return posts;
}
