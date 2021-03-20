
import Head from 'next/head'
import db from '../../../db.json';

function IndexPage() {
  return (

      <Head>
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,400;0,700;1,100&display=swap" rel="stylesheet" />
       
<title>QUIZ - Vanilla JS</title>
<meta name="title" content="QUIZ - Vanilla JS" />
<meta name="description" content="" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://quiz-vanillajs-felipefeitosadev.vercel.app/" />
<meta property="og:title" content="QUIZ - Vanilla JS" />
<meta property="og:description" content="" />
<meta property="og:image" content="https://raw.githubusercontent.com/FelipeFeitosaDev/quiz-vanillajs/main/bg_thumb.jpg" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://quiz-vanillajs-felipefeitosadev.vercel.app/" />
<meta property="twitter:title" content="QUIZ - Vanilla JS" />
<meta property="twitter:description" content="" />
<meta property="twitter:image" content={db.thumb} />
      </Head>
      
  )
}

export default IndexPage;