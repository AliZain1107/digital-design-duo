// api/[...slug].js
export const config = { runtime: "nodejs20.x" }; // ensure modern Node runtime

import { createPageRenderer } from "vite-plugin-ssr/node.js";

const pageRenderer = createPageRenderer({ /* optional root, etc. */ });

export default async function (req, res) {
  const url = req.url;
  const { httpResponse } = await pageRenderer.render({ url, isClientSide: false });

  if (!httpResponse) {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }
  res.statusCode = httpResponse.statusCode;
  for (const [k, v] of Object.entries(httpResponse.headers || {})) {
    res.setHeader(k, v);
  }
  res.end(httpResponse.body);
}
