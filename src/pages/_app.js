import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import next from "next";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light width-full min-h-screen`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
