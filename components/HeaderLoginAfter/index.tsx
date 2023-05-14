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
              ログイン完了
            </Link>
            <Link href="/blog" className={styles.Header_right_item_link}>
              Blog
            </Link>
            <Link href="/skills" className={styles.Header_right_item_link}>
              Skills
            </Link>
            <Link href="/contact" className={styles.Header_right_item_link}>
              Contact
            </Link>
            <Link
              href="/login"
              className={styles.Header_right_item_buttonSpace}
            >
              <Button
                className={styles.Header_right_item_buttonSpace_button}
                variant="contained"
                style={{ width: '80px', height: '40px' }}
              >
                Login
              </Button>
            </Link>
            <Link
              href="/login/signUp"
              className={styles.Header_right_item_buttonSpace}
            >
              <Button
                className={styles.Header_right_item_buttonSpace_button}
                variant="contained"
                style={{ width: '80px', height: '40px' }}
              >
                新規
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
