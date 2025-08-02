import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

const app = express();
app.use(compression());

let renderPage;

if (isProduction) {
  // serve static client build
  app.use(express.static(path.join(root, 'dist/client')));

  // use the built renderer
  const { createPageRenderer: createProdRenderer } = await import('vite-plugin-ssr/dist/cjs/node/entry.js');
  renderPage = createProdRenderer({ isProduction: true, root });
} else {
  // dev mode: Vite middleware
  const vite = await import('vite');
  const { createPageRenderer: createDevRenderer } = await import('vite-plugin-ssr');
  const viteDevServer = await vite.createServer({
    root,
    server: { middlewareMode: 'ssr' },
    appType: 'custom',
  });
  app.use(viteDevServer.middlewares);
  renderPage = createDevRenderer({ viteDevServer, isProduction: false });
}

app.get('*', async (req, res, next) => {
  const pageContextInit = { urlOriginal: req.originalUrl };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();

  for (const [name, value] of httpResponse.headers) {
    res.setHeader(name, value);
  }
  res.status(httpResponse.statusCode).send(httpResponse.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port} (production=${isProduction})`);
});
