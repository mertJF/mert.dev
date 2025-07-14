import Head from 'next/head'
import { Novatrix } from 'uvcanvas';

export default function Home() {

  return (
    <div className="bg-gray-800 h-screen p-20 overflow-hidden app font-lexend tracking-xxs" style={{ filter: 'sepia(1) hue-rotate(2000deg)' }}>
      <Head>
        <title>Mert Cukuren — UI Architect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Novatrix className="w-full h-full inset-0 h-full w-full absolute opacity-20" style={{ filter: 'grayscale(1) brightness(0.6) contrast(1.8)' }} />
      <div className="flex flex-col bg-white bg-opacity-100 absolute sm:inset-20 inset-6 sm:p-20 p-6 rounded" style={{ boxShadow: '0 0 100px #ffffffbd' }}>
        <h1 className="sm:text-7xl text-5xl text-gray-800">Mert Cukuren</h1>
        <h2 className="sm:mt-2 text-gray-700 sm:text-3xl text-xl">UI Architect at <a href="https://jotform.com" target="_blank">Jotform</a></h2>
        <div className="flex space-x-4 sm:mt-8 mt-4 sm:text-lg">
          <a href="https://twitter.com/knyttneve" className="text-gray-700 border-b-2 border-gray-700 hover:text-gray-800 hover:border-gray-800" target="_blank">Twitter</a>
          <a href="https://linkedin.com/in/mertcukuren" className="text-gray-700 border-b-2 border-gray-700 hover:text-gray-800 hover:border-gray-800" target="_blank">Linkedin</a>
          <a href="https://github.com/mertJF" className="text-gray-700 border-b-2 border-gray-700 hover:text-gray-800 hover:border-gray-800" target="_blank">GitHub</a>
          <a href="https://codepen.io/knyttneve" className="text-gray-700 border-b-2 border-gray-700 hover:text-gray-800 hover:border-gray-800" target="_blank">CodePen</a>
        </div>
      </div>
    </div>
  )
}
