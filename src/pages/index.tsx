import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import Test from '../components/test';
import Vim from '../components/vim';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello from next 123</h1>
        <Vim message="vim is awesome" />
        <p>Text 1</p>
        <p>Text 2</p>
        <Test />
        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </div>
  );
}
