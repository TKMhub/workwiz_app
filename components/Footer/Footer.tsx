import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.Footer}>
          <div className={styles.Footer_Inner}>
            <div className={styles.Footer_Inner_Box}>
              <div className={styles.Footer_Inner_Box_Title}>
                <h3>会社概要</h3>
              </div>
              <div className={styles.Footer_Inner_Box_Content}>
                <p>会社名：株式会社○○○○</p>

                <p>
                  所在地：〒000-0000 東京都��
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
