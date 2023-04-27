import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <Image
          className={styles.Header_WorkwizTop}
          src="/Workwiz_top.svg"
          alt="Workwiz Logo"
          width={170}
          height={30}
          priority
        />
        <div className={styles.Header_right}>
          <div className={styles.Header_right_item}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/skill">Skill</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <hr className={styles.Header_hr} />

      ヘッダーがスクロール時に固定されるようにする
      <style>
        {`
        .${styles.Header} {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-color: #fff;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        }
        .${styles.Header_WorkwizTop} {
          cursor: pointer;
        }
        .${styles.Header_right} {
          display: flex;
          align-items: center;
        }
        .${styles.Header_right_item} {
          display: flex;
          align-items: center;
          
        `}
      </style>
    </>
  );
};
