import Link from 'next/link';
import Layout from '../components/Layout';
import Bell from '../components/Bell';

export default () => (
  <div>
    <Layout header="1週間チャレンジ" title="ベルを押せ">
      <Bell />
      <Link href="/">
        <a>家から離れる</a>
      </Link>
    </Layout>
  </div>
);