<article>
	<slot />
</article>

<!-- <svg viewBox="0 0 24 24" style="fill:#fff;fill-opacity:.25"><path d=""/></svg> -->
<style>
	article {
		--border-color: #6d6d6d;
	}
	@media (prefers-color-scheme: light) {
		article {
			--border-color: #eaecef;
		}
	}
	article :global(ul),
	article :global(ol) {
		padding-left: 40px;
	}
	article :global(div.table-container) {
		width: 100%;
		overflow-x: auto;
	}
	article :global(a) {
		white-space: pre-wrap;
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;
	}

	article :global(img) {
		display: block;
		margin: 0 auto;
		max-width: 100%;
	}

	article :global(blockquote) {
		padding: 1px 25px;
		color: #aaa;
		border-left: solid 4px #ccc;
		margin: 8px 0;
	}
	@media (prefers-color-scheme: light) {
		article :global(blockquote) {
			color: #555;
		}
	}

	article :global(h1) {
		font-size: 3rem;
		line-height: 3.125rem;
		font-weight: 400;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.3em;
		margin: 0.5em 0;
	}

	article :global(h2) {
		font-size: 2.125rem;
		line-height: 2.5rem;
		font-weight: 400;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.3em;
		margin: 0.5em 0;
	}

	article :global(h3) {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 400;
		margin: 0.7em 0;
	}

	article :global(h4) {
		font-size: 1rem;
		line-height: 1.75rem;
		font-weight: 500;
		margin: 0.8em 0;
	}

	article :global(h5) {
		line-height: 1.75rem;
		font-size: 14px;
		font-weight: 500;
	}

	article :global(a),
	article :global(p),
	article :global(ul),
	article :global(ol),
	article :global(td),
	article :global(pre),
	article :global(blockquote),
	article :global(div.table-container) {
		line-height: 1.5rem;
		font-weight: 400;
		margin-top: 0;
		font-size: 16px;
		margin-bottom: 1em;
	}

	@media screen and (max-width: 767px) {
		article :global(blockquote) {
			padding: 1px 15px;
		}
		article :global(h1) {
			font-size: 2.125rem;
			line-height: 2.5rem;
			font-weight: 400;
		}
		article :global(h2) {
			font-size: 1.5rem;
			line-height: 2rem;
			font-weight: 400;
		}
		article :global(h3) {
			font-size: 1.25rem;
			line-height: 2rem;
			font-weight: 500;
		}
		article :global(a),
		article :global(p),
		article :global(ul),
		article :global(ol),
		article :global(pre),
		article :global(blockquote),
		article :global(div.table-container) {
			font-size: 14px;
		}
	}

	article :global(hr) {
		width: 100%;
		border: 0;
		height: 0;
		border-top: 1px solid #999;
		margin: 0.3em 0 1.3em 0;
	}

	@media (prefers-color-scheme: light) {
		article :global(hr) {
			border-top-color: #0003;
		}
	}

	article :global(table) {
		width: 100%;
		border-collapse: collapse;
	}

	article :global(td),
	article :global(th) {
		border: var(--border-color) 1px solid;
		padding: 6px 13px;
	}

	article :global(tr:nth-child(odd)) {
		background: #222;
	}

	article :global(tr:nth-child(even)) {
		background: #333;
	}

	@media (prefers-color-scheme: light) {
		article :global(tr:nth-child(odd)) {
			background: #fff;
		}
		article :global(tr:nth-child(even)) {
			background: #eee;
		}
	}

	article :global(details) {
		cursor: pointer;
	}

	/* Code */
	article :global(code),
	article :global(code *) {
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	}
	/* Inline code */
	article :global(:not(pre) > code) {
		padding: 1px 6px;
		border: solid #999 1px;
		border-radius: 4px;
		background-color: #1c1e1f;
		color: #f2f2f2;
		word-wrap: break-word;
	}
	@media (prefers-color-scheme: light) {
		article :global(:not(pre) > code) {
			background-color: #f0f0f0;
			color: black;
		}
	}
	article :global(a > code) {
		color: rgb(82, 165, 14);
		text-decoration: underline dotted rgb(82, 165, 14) 2px;
	}
	/* Code blocks */
	article :global(pre) {
		padding: 1rem;
		border-radius: 0.3em;
		background: #2b2b2b;
		overflow: auto;
	}
	article :global(pre),
	article :global(pre > code) {
		color: #f8f8f2;
	}

	/* Hint bars */
	article :global(div.info),
	article :global(div.warning),
	article :global(div.error) {
		margin-bottom: 1em;
		color: #fff;
		padding: 1em 2em 1px 5em;
		border-radius: 4px;
		background-repeat: no-repeat;
		background-size: 80px 80px;
		background-position: top left;
	}
	article :global(div.info a),
	article :global(div.warning a),
	article :global(div.error a) {
		color: #fff;
		text-decoration: underline dotted #fff 2px;
	}
	article :global(div.info :not(pre) > code),
	article :global(div.warning :not(pre) > code),
	article :global(div.error :not(pre) > code) {
		background-color: transparent;
		border: 0;
	}
	article :global(div.info) {
		background-color: #0d47a1;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style='fill:%23fff;fill-opacity:.25'%3E%3Cpath d='M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z'/%3E%3C/svg%3E");
	}
	article :global(div.warning) {
		background-color: #bf360c;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style='fill:%23fff;fill-opacity:.25'%3E%3Cpath d='M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z'/%3E%3C/svg%3E");
	}
	article :global(div.error) {
		background-color: #b71c1c;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style='fill:%23fff;fill-opacity:.25'%3E%3Cpath d='M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z'/%3E%3C/svg%3E");
	}

	/* Code highlighting (from a11y-dark) */
	/* Comment */
	article :global(.hljs-comment),
	article :global(.hljs-quote) {
		color: #d4d0ab;
	}
	/* Red */
	article :global(.hljs-variable),
	article :global(.hljs-template-variable),
	article :global(.hljs-tag),
	article :global(.hljs-name),
	article :global(.hljs-selector-id),
	article :global(.hljs-selector-class),
	article :global(.hljs-regexp),
	article :global(.hljs-deletion) {
		color: #ffa07a;
	}
	/* Orange */
	article :global(.hljs-number),
	article :global(.hljs-built_in),
	article :global(.hljs-literal),
	article :global(.hljs-type),
	article :global(.hljs-params),
	article :global(.hljs-meta),
	article :global(.hljs-link) {
		color: #f5ab35;
	}
	/* Yellow */
	article :global(.hljs-attribute) {
		color: #ffd700;
	}
	/* Green */
	article :global(.hljs-string),
	article :global(.hljs-symbol),
	article :global(.hljs-bullet),
	article :global(.hljs-addition) {
		color: #abe338;
	}
	/* Blue */
	article :global(.hljs-title),
	article :global(.hljs-section) {
		color: #00e0e0;
	}
	/* Purple */
	article :global(.hljs-keyword),
	article :global(.hljs-selector-tag) {
		color: #dcc6e0;
	}
	article :global(.hljs-emphasis) {
		font-style: italic;
	}
	article :global(.hljs-strong) {
		font-weight: bold;
	}
	@media screen and (-ms-high-contrast: active) {
		article :global(.hljs-addition),
		article :global(.hljs-attribute),
		article :global(.hljs-built_in),
		article :global(.hljs-bullet),
		article :global(.hljs-comment),
		article :global(.hljs-link),
		article :global(.hljs-literal),
		article :global(.hljs-meta),
		article :global(.hljs-number),
		article :global(.hljs-params),
		article :global(.hljs-string),
		article :global(.hljs-symbol),
		article :global(.hljs-type),
		article :global(.hljs-quote) {
			color: highlight;
		}
		article :global(.hljs-keyword),
		article :global(.hljs-selector-tag) {
			font-weight: bold;
		}
	}
</style>
