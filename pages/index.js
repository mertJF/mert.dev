import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-800 text-white h-screen overflow-hidden grid place-items-center content-center text-left">
      <Head>
        <title>Mert Cukuren — UI Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <h1 className="text-4xl">Mert Cukuren</h1>
        <h2 className="mt-2 text-gray-400">UI Developer at JotForm</h2>
        <div className="flex space-x-4 mt-8">
          <a href="https://twitter.com/knyttneve" className="text-gray-400 border-b-2 border-gray-700 text-sm hover:text-white" target="_blank">Twitter</a>
          <a href="https://linkedin.com/in/mertcukuren" className="text-gray-400 border-b-2 border-gray-700 text-sm hover:text-white" target="_blank">Linkedin</a>
          <a href="https://github.com/mertJF" className="text-gray-400 border-b-2 border-gray-700 text-sm hover:text-white" target="_blank">GitHub</a>
          <a href="https://codepen.io/knyttneve" className="text-gray-400 border-b-2 border-gray-700 text-sm hover:text-white" target="_blank">CodePen</a>
        </div>
      </div>
    </div>
  )
}
