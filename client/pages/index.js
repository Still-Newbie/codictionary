import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>코딕셔너리</title>
        <meta keyword="이거 뭔지 검색하기" />
        <meta contents="이거 뭔지 검색하기" />
      </Head>
      <h1>여기는 대가리가 아니야아</h1>
    </div>
  );
}
