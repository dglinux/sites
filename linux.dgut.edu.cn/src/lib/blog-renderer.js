import { table } from '@dglinux/sites-common/lib/renderers';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.table = table;

export default renderer;
