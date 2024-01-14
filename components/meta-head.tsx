import Head from "next/head";

export function MetaHead() {
   return (
      <Head>
         <title>Suman Biswas</title>
         <meta
            name="description"
            content="This is portfolio website of Suman Biswas who is a student and a developer"
         />
         {/* Set Favicon depending on color scheme */}
         <link rel="icon" href="/favicon-white.svg" media="(prefers-color-scheme: dark)" />
         <link rel="icon" href="/favicon.svg" media="(prefers-color-scheme: light)" />

         {/* Add Google Fonts */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
         />

         {/* Add Google Analytics */}
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
