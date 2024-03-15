import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/resume.module.css';
import Resume from '@/components/aboutme/resume.js';
import Link from 'next/link';
import { downloadPDF } from '@/utils/pdfGenerator';


export default function AboutMe() {
  return (
    <Layout>
      <div><button onClick={() => downloadPDF('cvContent')}className={styles.downloadButton}>Download CV as PDF</button></div>
      <div id="cvContent" className={styles.cvContentContainer}>
          <Resume/>
          <h1>__________________________</h1>
      </div>
      
    </Layout>
  );
}