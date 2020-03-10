import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <div>
    <Layout header="1週間チャレンジ" title="Home Bell">
      <Link href="/home">
        <a>お家へ向かう</a>
      </Link>
    </Layout>
  </div>
);