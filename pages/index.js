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
        <Header title=" under construction" />
        <h1>jamietreyvaud.com</h1>
        <p className="Updating">
          Updating website content</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
