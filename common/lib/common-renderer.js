import marked from 'marked';
import hljs from 'highlight.js';

export default class CommonRenderer extends marked.Renderer {
	// Make table horizontally scrollable
	table(header, body) {
		return '<div class="table-container">' + super.table(header, body) + '</div>';
	}
}

export function highlight(code, lang) {
	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
	return hljs.highlight(code, { language }).value;
}
