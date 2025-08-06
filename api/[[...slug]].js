import { renderPage } from 'vite-plugin-ssr/server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  try {
    const pageContextInit = {
      urlOriginal: req.url
    };

    const pageContext = await renderPage(pageContextInit);
    
    if (!pageContext.httpResponse) {
      res.status(404).end('Not Found');
      return;
    }

    const { statusCode, headers, body } = pageContext.httpResponse;
    
    res.status(statusCode);
    
    // Set headers properly
    if (headers && Array.isArray(headers)) {
      headers.forEach(([name, value]) => {
        res.setHeader(name, value);
      });
    }
    
    res.end(body);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
}