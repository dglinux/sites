<script>
	import { page } from '$app/stores';
	$: section = $page.path.split('/')[1];
</script>

<header>
	<a class="titlebar" href="/">
		<img src="/assets/logo.png" alt="DGLinux Logo" />
		<span class="title">莞工 GNU/Linux 协会</span>
	</a>
	<nav>
		<ul>
			<li class:active={section === ''}>
				<a href="/">Home</a>
			</li>
			<li class:active={section === 'blog'}>
				<a href="/blog">Blog</a>
			</li>
			<li><a href="https://t.me/dgutlinux/">Channel</a></li>
			<li><a href="https://mirrors.dgut.edu.cn/help">Wiki</a></li>
			<li><a href="https://mirrors.dgut.edu.cn/">Mirrors</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 1.05em 0;
	}
	.titlebar,
	nav {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
	}
	.titlebar {
		font-size: 1.5em;
		line-height: 1em;
	}
	img {
		width: 1.5em;
		height: 1.5em;
	}
	.title {
		margin-left: 0.5em;
		color: white;
		letter-spacing: 1px;
	}
	a {
		text-decoration: none;
	}
	ul {
		display: inline-flex;
		flex-direction: row;
		column-gap: 1.5rem;
		list-style: none;
	}
	nav a {
		display: inline;
		text-transform: uppercase;
		color: #ddd;
		font-weight: 700;
		font-size: 12px;
		line-height: 20px;
		padding: 15px 0;
	}
	.active a {
		border-bottom: 2px solid rgb(82, 165, 14);
	}
	nav a:hover {
		color: rgb(82, 165, 14);
	}
	@media (max-width: 767px) {
		header {
			flex-direction: column;
			align-items: center;
			row-gap: 7.5px;
		}
		nav {
			flex-wrap: wrap;
		}
		.title {
			font-size: 18px;
		}
		nav a {
			padding: 10px 0;
		}
	}
	@media (prefers-color-scheme: light) {
		.title {
			color: black;
		}
		nav a {
			color: #384452;
		}
	}
</style>
