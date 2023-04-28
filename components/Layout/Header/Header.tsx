import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
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
