import { renderPage } from 'vike/server';

export default async function handler(req, res) {
  try {
    const pageContextInit = { 
      urlOriginal: req.url || req.originalUrl 
    };
    
    const pageContext = await renderPage(pageContextInit);

    if (!pageContext.httpResponse) {
      res.status(404).send('Not Found');
      return;
    }

    const { body, statusCode, headers } = pageContext.httpResponse;
    
    // Set headers
    headers.forEach(([name, value]) => {
      res.setHeader(name, value);
    });
    
    res.status(statusCode).send(body);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}