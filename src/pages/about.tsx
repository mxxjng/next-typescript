import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello from about</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Layout>
    </div>
  );
}
