export const prerender = true;

export async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {}
    }
  };
}
