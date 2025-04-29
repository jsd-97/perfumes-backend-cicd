import { getPerfumes } from './controllers/perfumes.js';
import cors from '@koa/cors';

import Koa  from 'koa';
const app = new Koa();
app.use(cors());

app.use(async ctx => {
  ctx.body = await getPerfumes();
});

app.listen(3000)
console.log('Server listening on port 3000');