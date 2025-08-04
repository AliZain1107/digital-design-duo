import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderPage } from 'vite-plugin-ssr/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const root = process.cwd();

const app = express();
app.use(compression());

if (isProduction) {
  // serve static client build
  app.use(express.static(path.join(root, 'dist/client')));
}

app.get('*', async (req, res, next) => {
  try {
    const pageContextInit = { urlOriginal: req.originalUrl };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();

    for (const [name, value] of httpResponse.headers) {
      res.setHeader(name, value);
    }
    res.status(httpResponse.statusCode).send(httpResponse.body);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port} (production=${isProduction})`);
});
