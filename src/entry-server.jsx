/**
 * Server entry used only at build time, by scripts/prerender.mjs.
 *
 * Rendering with react-dom/server rather than a headless browser is deliberate:
 * the production build runs on Vercel, where no browser binary exists. A
 * browser-based prerender would fail the deploy.
 */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
// react-router-dom v7 exports StaticRouter from the package root; the old
// "react-router-dom/server" subpath no longer exists.
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
