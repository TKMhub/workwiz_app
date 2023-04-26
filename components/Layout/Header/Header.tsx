import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
    <div className={styles.Header}>
      <Image
        className={styles.Header2}
        src="/Workwiz_top.svg"
        alt="Workwiz Logo"
        width={250}
        height={40}
        priority
        />
    </div>
    </>
  );
};
