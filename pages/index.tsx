import styles from "./Home.module.scss";
import Layout from "../components/LayoutLoginBefore";
import SkillSet from "@/components/SkillSet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
          <div className={styles.Home_Contents}>
            <h1>About</h1>
            <div className={styles.Home_description}>
              <p>
                WorkWizは今後、様々なアプリケーションを開発します。<br />
                現在はたった一つの機能しかありませんが、Webアプリケーション、モバイルアプリケーションの分野で、<br />
                皆様のお役に立てるようなアプリケーションを開発していきます。<br />
                また、UI/UXの向上を目指し、日々改善を行っていきます。 
              </p>
            </div>
          </div>

          <div className={styles.Home_Contents}>
            <h1>Vision</h1>
            <div className={styles.Home_description}>
              <p>
                WorkWizは業務を効率的にこなす為の機能を提供し、
                日々の業務が円滑に進められるように、手助けをします。<br />
                そして、余った時間でよりクリエイティブな活動に注力しましょう。
              </p>
            </div>
          </div>

          <div className={styles.Home_Contents}>
            <h1>Contents</h1>
            <div className={styles.Home_description}>
              <p>
                以下に私たちのプロダクトを紹介します。
              </p>
            </div>
          </div>

          <div className={styles.Home_Prodacts}>
            <h2>
              PtoE
            </h2>
            <p>
              PDFをExcelに変換する機能です。
            </p>
          </div>
          <SkillSet />
        </main>
      </Layout>
      <Footer />
    </>
  );
}
