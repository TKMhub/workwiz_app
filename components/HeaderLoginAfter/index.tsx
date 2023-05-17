import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

export const Header = () => {
  // プロップスの受け渡しでログイン時に利用したユーザーIDを取得する
  const userId = "ユーザーＩＤ";
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
            <p>{userId}</p>
            <Link
              href="/login"
              className={styles.Header_right_item_buttonSpace}
            >
              <Button
                className={styles.Header_right_item_buttonSpace_button}
                variant="contained"
                style={{ width: '80px', height: '40px' }}
              >
                Logout
              </Button>
            </Link>
            <BrightnessLowIcon />
          </div>
        </div>
      </div>
    </>
  );
};
