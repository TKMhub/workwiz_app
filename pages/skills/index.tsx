import React from "react";
import styles from "./Skills.module.scss";
import Layout from "@/components/Layout/Layout";
import Top from "@/components/Layout/Top/Top";
import Footer from "@/components/Layout/Footer/Footer";

const Skills = () => {
  return (
    <>
      <Layout>
        <main className={styles.Home}>
          <Top />
        </main>
      </Layout>
      <Footer />
    </>
  );
};

export default Skills;
