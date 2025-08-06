import express from 'express';
import { renderPage } from 'vike/server';
import compression from 'compression';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(compression());

// Serve static files in production
if (isProduction) {
  app.use(express.static('dist/client', { index: false }));
}

// Handle SSR requests
app.all('*', async (req, res) => {
  try {
    const pageContextInit = { urlOriginal: req.originalUrl };
    const pageContext = await renderPage(pageContextInit);

    if (!pageContext.httpResponse) {
      res.status(404).send('Not Found');
      return;
    }

    const { body, statusCode, headers } = pageContext.httpResponse;
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.status(statusCode).send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Only start server if not running on Vercel
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export for Vercel
export default app;
