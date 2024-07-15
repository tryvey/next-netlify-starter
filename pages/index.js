import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>jamietreyvaud.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Jamie Treyvaud Personal Website" />
        <h1>Managing Consultant | User Experience</h1>
        <h2>Friends of Figma - Melbourne | Visual Thinker and Product Designer</h2>
        <p className="Updating">
          <code>Updating website content | 2024</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
