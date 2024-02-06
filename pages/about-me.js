import Layout from '@/components/layout';
import Image from "next/legacy/image";
import Link from 'next/link';
import { downloadPDF } from '@/utils/pdfGenerator';
import Resume from '../components/aboutme/resume';

export default function AboutMe() {
    return (
        <Layout>
            {/* <h1>About Me</h1>
            <p>This is the about me page where I introduce myself.</p> */}
            {/* Add more content and styling as needed */}

            <div>
                <div id="cvContent">
                    <Resume/>      
            </div>
            <button onClick={() => downloadPDF('cvContent')}>Download CV as PDF</button>
        </div>
        </Layout>
    );
}
