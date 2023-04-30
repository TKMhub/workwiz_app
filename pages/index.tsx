import styles from "./Home.module.scss";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import Top from "@/components/Layout/Top/Top";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
        <Top />
        </main>
      </Layout>
    </>
  );
}
