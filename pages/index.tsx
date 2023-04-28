import styles from "./Home.module.scss";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
          <div>メインコンテンツー</div>
          <div>メインコンテンツー</div>
          <div>メインコンテンツー</div>
          <div>メインコンテンツー</div>
          <div>メインコンテンツー</div>
        </main>
      </Layout>
    </>
  );
}
