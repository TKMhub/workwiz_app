import axios from "axios";
import { saveAs } from "file-saver";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
// import nookies from "nookies";
import Layout from "@/components/LayoutLoginAfter";
import styles from "./loginAfterFst.module.scss";
import { useRouter } from "next/router";
import ContentBox from "@/components/ContentBox";
import Loader from "@/components/Loader";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const index = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.token;
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false); // トークンが存在する場合、ローディングを終了
    }
  }, [token, router]);

  return (
    <Layout>
      {loading ? (
        <Loader /> 
      ) : (
        <div className={styles.loginAfter}>
          <ContentBox href="/pdfup" content="PtoE" />
        </div>
      )}
    </Layout>
  );
};
export default index;