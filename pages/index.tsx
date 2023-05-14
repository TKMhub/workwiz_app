import styles from "./Home.module.scss";
import Layout from "../components/LayoutLoginBefore";
import SkillSet from "@/components/SkillSet";
import Footer from "@/components/Footer";

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
