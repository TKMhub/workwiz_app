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
          width={250}
          height={40}
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
    </>
  );
};
