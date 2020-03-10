import Link from 'next/link';
import style from '../static/Style';

export default () => <div>
  {style}
  <h1>React,Redux,Next.js,Firebase</h1>
  <div>1週間チャレンジ</div>
  <Link href="/home">
    <a>お家へ向かう</a>
  </Link>
</div>