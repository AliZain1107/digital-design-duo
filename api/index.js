import { createPageRenderer } from 'vike/server';
import express from 'express';
import { renderPage } from 'vike/server';
import compression from 'compression';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(compression());

// Handle all requests
app.all('*', async (req, res) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
  };

  try {
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
      res.status(404).send('Not Found');
      return;
    }

    const { body, statusCode, headers } = httpResponse;
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.status(statusCode).send(body);
  } catch (error) {
    console.error(error.stack);
    res.status(500).send('Internal Server Error');
  }
});

export default app;