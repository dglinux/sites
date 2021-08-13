<script>
	import { page } from '$app/stores';
	$: section = $page.path.split('/')[1];
</script>

<header>
	<a class="titlebar" href="/">
		<img src="/assets/logo.png" alt="DGLinux Logo" />
		<span class="title">东莞理工学院 镜像站</span>
	</a>
	<nav>
		<ul>
			<li><a href="https://linux.dgut.edu.cn/">Home</a></li>
			<li><a href="https://linux.dgut.edu.cn/blog">Blog</a></li>
			<li class:active={section === 'planet'}>
				<a href="https://linux.dgut.edu.cn/planet">Planet</a>
			</li>
			<li class:active={section === 'help'}>
				<a href="/help">Wiki</a>
			</li>
			<li class:active={section !== 'help'}>
				<a href="/">Mirrors</a>
			</li>
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
		letter-spacing: 3px;
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
