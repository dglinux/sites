<footer>
	<div>
		<h3>Links</h3>
		<p>
			<a href="/download" class="download">软件/安装镜像下载</a>
		</p>
		<p>
			<a href="https://help.mirrors.dglinux.com/"><b>使用帮助 Help</b></a>
		</p>
		<p>
			<a href="https://github.com/dglinux/issues/issues/new">
				<b>镜像请求/反馈 New Mirror/Issues</b>
			</a>
		</p>
	</div>
	<div>
		<h3>Introduction</h3>
		<p>
			东莞理工学院 GNU/Linux 协会 开源软件镜像站 (Dongguan University of Technology GNU/Linux
			Association Mirror) 在黄培灿老师的带领下成立于 2016
			年。开源软件镜像站依托于东莞理工学院，部署于教育网华南地区，旨在为莞工师生及华南地区开源软件使用者用户提供优质的开源软件镜像服务。
		</p>
	</div>
	<div>
		<h3>Something</h3>
		<p>
			Copyleft &copy; 2005-2021 Dongguan University of Technology GNU/Linux Association
			<a href="https://linux.dgut.edu.cn/">(Dglinux)</a>
		</p>
		<p>
			欲参阅教育网主要镜像站列表，请访问
			<a href="https://mirrorz.org/site/DGUT"><b><em>mirrorZ</em></b></a> 项目。
		</p>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		column-gap: 2em;
		margin-top: 2em;
	}
	footer > div {
		flex: 1;
		min-width: 14em;
		margin-bottom: 2em;
	}
	h3 {
		letter-spacing: 0.5px;
	}
	h3::before {
		content: '#';
		color: #343434;
		margin-right: 0.3em;
	}
	h3:hover::before {
		color: rgb(99, 201, 16);
	}
	p {
		margin-top: 1em;
		letter-spacing: 0.9px;
	}
	.download {
		display: inline-block;
		color: #fff;
		text-decoration: none;
		background: rgb(82, 165, 14);
		border-radius: 0.2em;
		padding: 0.5em 1rem;
	}
	.download:hover {
		text-decoration: none;
		background: rgb(99, 201, 16);
	}
</style>
