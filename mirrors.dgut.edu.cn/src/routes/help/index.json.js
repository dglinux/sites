import fs from 'fs';

function removeExt(f) {
	return f.split('.')[0]
}

export function get(request) {
	const body = fs.readdirSync('help')
		.filter(file => (
			(file[0] !== '.') && fs.statSync(`help/${file}`).isDirectory()
		))
		.map(dir => ({
			section: dir,
			files: fs.readdirSync(`help/${dir}`).map(removeExt)
		}));
	return {
		status: 200,
		body
	};
}