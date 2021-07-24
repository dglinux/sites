<article>
	<slot />
</article>

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
		color: #555;
		border-left: solid 4px #ccc;
		margin: 8px 0;
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
		width: 85%;
		border: 0;
		height: 0;
		border-top: 1px solid #999;
		margin-top: 0.3em;
		margin-bottom: 1.3em;
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

	article :global(pre) {
		padding: 1rem;
		border-radius: 0.3em;
		background: #272822;
		overflow: auto;
	}
	article :global(code) {
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	}

	article :global(pre),
	article :global(pre > code) {
		color: #f8f8f2;
	}
</style>
