import axios from "axios";
import { saveAs } from "file-saver";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
// import nookies from "nookies";
import Layout from "@/components/LayoutLoginAfter";
import styles from "./loginAfterFst.module.scss";
import { Button, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useRouter } from "next/router";
import GlassEffect from "@/components/GlassEffect";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const index = () => {
  // const router = useRouter();
  // const cookies = parseCookies();
  // const token = cookies.token;
  // const [loading, setLoading] = useState(true); // ローディング状態を追加

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   } else {
  //     setLoading(false); // トークンが存在する場合、ローディングを終了
  //   }
  // }, [token, router]);

  return (
    <Layout>
      <div className={styles.loginAfter}>
        <p>ガラス張りのプレートで機能選択ができるようにする。<br/>将来的には、loginAfter/の直下に各機能を配置</p>
        <GlassEffect />
      </div>
    </Layout>
  );
};
export default index;