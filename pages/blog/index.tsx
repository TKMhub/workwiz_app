import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import styles from './Blog.module.scss'
import React from 'react'

const blog = () => {
  return (<>
    <Layout>
    <div className={styles.centerImage}>
          <div className={styles.contentsBox}>
            <div className={styles.pulseWrapper}>
              <div className={styles.pulseDot1}></div>
              <div className={styles.pulseDot2}></div>
              <div className={styles.pulseDot3}></div>
            </div>
          </div>
          <div className={styles.comming}>
            <h1>Comming soon...</h1>
          </div>
        </div>
    </Layout>
    <Footer />
  </>
  )
}

export default blog