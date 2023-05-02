import styles from "./Home.module.scss";
import Layout from "../components/Layout/Layout";
import Top from "@/components/Layout/Top/Top";
import Footer from "@/components/Layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
          <Top />
        </main>
      </Layout>
      <Footer />
    </>
  );
}
