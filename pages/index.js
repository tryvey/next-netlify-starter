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
        <Header title="Under construction" />
        <p className="Currently updating website content">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
