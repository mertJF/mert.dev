import Head from 'next/head'
import { Novatrix } from 'uvcanvas';

export default function Home() {

  return (
    <div className="bg-gray-800 h-screen p-20 overflow-hidden app" style={{ filter: 'sepia(1) hue-rotate(2000deg)' }}>
      <Head>
        <title>Mert Cukuren — UI Architect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Novatrix className="w-full h-full inset-0 h-full w-full absolute" style={{ filter: 'grayscale(1) brightness(0.4) contrast(1.8)' }} />
      <div className="flex flex-col from-white to-transparent bg-gradient-to-r bg-opacity-90 absolute sm:top-20 sm:left-20 inset-0 sm:p-20 top-10 left-10 p-10" style={{ backdropFilter: 'blur(15px)' }}>
        <h1 className="sm:text-5xl text-4xl text-gray-800">Mert Cukuren</h1>
        <h2 className="mt-2 text-gray-700 sm:text-lg">UI Architect at Jotform</h2>
        <div className="flex space-x-4 mt-8">
          <a href="https://twitter.com/knyttneve" className="text-gray-700 border-b border-gray-700 text-sm hover:text-gray-800 hover:border-gray-800" target="_blank">Twitter</a>
          <a href="https://linkedin.com/in/mertcukuren" className="text-gray-700 border-b border-gray-700 text-sm hover:text-gray-800 hover:border-gray-800" target="_blank">Linkedin</a>
          <a href="https://github.com/mertJF" className="text-gray-700 border-b border-gray-700 text-sm hover:text-gray-800 hover:border-gray-800" target="_blank">GitHub</a>
          <a href="https://codepen.io/knyttneve" className="text-gray-700 border-b border-gray-700 text-sm hover:text-gray-800 hover:border-gray-800" target="_blank">CodePen</a>
        </div>
      </div>
    </div>
  )
}
