import styles from "./Home.module.scss";
import Layout from "../components/Layout/Layout";
import SkillSet from "@/components/SkillSet/SkillSet";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
          <SkillSet />
        </main>
      </Layout>
      <Footer />
    </>
  );
}
