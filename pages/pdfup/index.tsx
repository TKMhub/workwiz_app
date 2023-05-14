import axios from "axios";
import { saveAs } from "file-saver";
import React, { ChangeEvent, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import Layout from "@/components/LayoutLoginAfter";
import styles from "./loginAfterFst.module.scss";
import { Button, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const handleFileUpload = async (pdfFile: File) => {
  // FormDataオブジェクトを作成し、PDFファイルを追加
  const formData = new FormData();
  formData.append("pdf", pdfFile);

  // APIリクエストを送信し、変換されたExcelファイルをblobとして受け取る
  const response = await axios.post("http://localhost:8000/api/convert_pdf_to_excel/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    responseType: "blob",
  });

  // BlobをExcelファイルとして保存
  const blob = new Blob([response.data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "converted.xlsx");
};

const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files[0]) {
    handleFileUpload(event.target.files[0]);
  }
};

const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
  if (event.dataTransfer.files && event.dataTransfer.files[0]) {
    handleFileUpload(event.dataTransfer.files[0]);
  }
};

const index = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsActive(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsActive(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileUpload(event.dataTransfer.files[0]);
    }
    setIsActive(false); // ドロップ時にアクティブ状態を解除
  };

  return (
    <Layout>
      <div className={styles.loginAfterFst}>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          onChange={onFileChange}
          hidden
        />
        <div
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={(event) => event.preventDefault()}
          style={{
            border: "2px dashed #ccc",
            borderRadius: "5px",
            padding: "100px",
            textAlign: "center",
            backgroundColor: isActive ? "#eee" : "#fff", // ドロップ時に背景色を変更
          }}
        >
          <CloudUpload fontSize="large" />
          <Typography variant="body1">
            ドラッグアンドドロッップまたは
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => inputRef.current?.click()}
            style={{ marginTop: "10px" }}
          >
            ファイルを選択
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default index;
