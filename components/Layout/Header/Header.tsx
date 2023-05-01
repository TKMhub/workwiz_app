import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";

import { styled } from "@mui/system";

const ButtonSpace = styled("div")({
  marginRight: "20px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  border: "2px solid #0046c9",
  color: "#002A76",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#002A76",
    color: "#fff",
    fontWeight: "600",
  },
}));

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
            <Link
              href="/login"
              className={styles.Header_right_item_buttonSpace}
            >
              <ButtonSpace>
                <StyledButton variant="contained">Login</StyledButton>
              </ButtonSpace>
            </Link>
            <Link
              href="/login/signUp"
              className={styles.Header_right_item_buttonSpace}
            >
              <ButtonSpace>
                <StyledButton variant="contained">新規</StyledButton>
              </ButtonSpace>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
