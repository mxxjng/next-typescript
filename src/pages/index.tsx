import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Test from '../components/test';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto">
          <h1 className="sm:text-lg md:text-3xl">Hello from next 123</h1>
          <p>Text 1</p>
          <p>Text 2</p>
          <Test />
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
