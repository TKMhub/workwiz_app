import React from "react";
import styles from "./Skills.module.scss";
import Layout from "@/components/Layout/Layout";
import Top from "@/components/SkillSet/SkillSet";
import Footer from "@/components/Footer/Footer";

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
