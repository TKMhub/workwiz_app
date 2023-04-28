import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <Link href="/" className={styles.Header_link}>
          <Image
            className={styles.Header_WorkwizTop}
            src="/Workwiz_top.svg"
            alt="Workwiz Logo"
            width={170}
            height={30}
            priority
          />
        </Link>
        <div className={styles.Header_right}>
          <div className={styles.Header_right_item}>
            <Link href="/" className={styles.Header_right_item_link}>
              TOP
            </Link>
            <Link href="/blog" className={styles.Header_right_item_link}>
              Blog
            </Link>
            <Link href="/skill" className={styles.Header_right_item_link}>
              Skills
            </Link>
            <Link href="/contact" className={styles.Header_right_item_link}>
              Contact
            </Link>
            <Link href="/login">
              <Button
                className={styles.Header_right_item_button}
                variant="contained"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style>
        下記をメディアクエリにより実現して。
        ページの表示が先頭の時はヘッダーのボーダーボトムを非活性にする。
      </style>
    </>
  );
};
