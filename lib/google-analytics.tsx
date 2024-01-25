import Head from "next/head";

export function GoogleAnalytics() {
   return (
      <Head>
         <title>Suman Biswas</title>
         <meta
            name="description"
            content="This is portfolio website of Suman Biswas who is a student and a developer"
         />
         <link rel="icon" href="/favicon-white.svg" media="(prefers-color-scheme: dark)" />
         <link rel="icon" href="/favicon.svg" media="(prefers-color-scheme: light)" />

         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
         ></script>
         <script
            dangerouslySetInnerHTML={{
               __html: `window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date()); 
         gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}');`,
            }}
         ></script>
      </Head>
   );
}
