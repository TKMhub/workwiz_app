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
      <footer>
        <div className={styles.Footer}>
          <div className={styles.Footer_Inner}>
            <div className={styles.Footer_Inner_Box}>
              <div className={styles.Footer_Inner_Box_Title}>
                <h3>会社概要</h3>
              </div>
              <div className={styles.Footer_Inner_Box_Content}>
                <p>会社名：株式会社○○○○</p>

                <p>所在地：〒000-0000 東京都��

                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <style>
        {`
        // footerのスタイルを整えて。
        .${styles.Footer} {
          background-color: #002A76;
          color: #fff;
          padding: 40px 0;
        }
        .${styles.Footer_Inner} {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        .${styles.Footer_Inner_Box} {
          width: 30%;
        }
        .${styles.Footer_Inner_Box_Title} {
          margin-bottom: 20px;
        }
        .${styles.Footer_Inner_Box_Title} > h3 {
          font-size: 18px;
          font-weight: 600;
          border-bottom: 2px solid #fff;
          padding-bottom: 10px;
        }
        .${styles.Footer_Inner_Box_Content} {
          font-size: 14px;
        }
        .${styles.Footer_Inner_Box_Content} > p {
          margin-bottom: 10px;
        }
        .${styles.Footer_Inner_Box_Content} > p > span {
          font-weight: 600;
        }
        .${styles.Footer_Inner_Box_Content} > p > br {
          display: none;
        }
        @media (max-width: 768px) {
          .${styles.Footer_Inner} {
            flex-direction: column;
          }
          .${styles.Footer_Inner_Box} {
            width: 100%;
            margin-bottom: 40px;
          }
        }
        `}
      </style> */}
    </>
  );
}
