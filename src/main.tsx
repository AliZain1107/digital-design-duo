import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { PageContextProvider } from './renderer/usePageContext'

export async function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  const root = document.getElementById('root')!

  if (pageContext.isHydration) {
    hydrateRoot(
      root,
      <PageContextProvider pageContext={pageContext}>
        <Page {...pageProps} />
      </PageContextProvider>
    )
  } else {
    createRoot(root).render(
      <PageContextProvider pageContext={pageContext}>
        <Page {...pageProps} />
      </PageContextProvider>
    )
  }
}