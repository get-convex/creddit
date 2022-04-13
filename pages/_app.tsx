import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ConvexProvider, ConvexReactClient } from "convex-dev/react";
import convexConfig from "../convex.json";

const convex = new ConvexReactClient(convexConfig.origin);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Creddit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ConvexProvider client={convex}>
        <Component {...pageProps} />
      </ConvexProvider>
    </>
  );
}

export default MyApp;
