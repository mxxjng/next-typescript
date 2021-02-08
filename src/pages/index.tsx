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
        <h1>Hello from next 123</h1>
        <Test />
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </div>
  );
}
