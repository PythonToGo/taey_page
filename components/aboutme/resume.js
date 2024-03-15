import Link from 'next/link';
import styles from '../../styles/resume.module.css';
import Image from 'next/image';
import Layout from '@/components/layout';

 export default function Resume() {
     return (
       <div className={styles.resume}>
         <div className={styles.header}>
           <h1>Taeyoung Kim</h1>
           <p>+49 15781051446 |  <Link href="mailto:ty.kim@tum.de" className="text-gray-600 ml-1"></Link>ty.kim@tum.de</p>
         </div>
        
         <div className={styles.section}>
             <div className={styles.category}>Education</div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Oct. 2021 – Present</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Technical University Munich, Munich, Germany</div>
                 <div className={styles.subtitle}>Bachelor of Science Electrical and Computer Engineering</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Oct. 2020 – Sep.2021</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Regensburg University, Regensburg, Germany</div>
                 <div className={styles.subtitle}>Bachelor of Science, Computer Science</div>
                 </div>
             </div>
         </div>

  
         <div className={styles.section}>
             <div className={styles.category}>Working Experience</div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Jan. 2024 – Present</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Robotic Process Automation Engineer, 
                 <span className={styles.label}> BMW AG, Munich, Germany</span></div>
                 <div className={styles.subtitle}>Robotic Process Automation (RPA), Migration Excel VBA-based legacy systems to a .NET/VB.NET environment</div>
                 <div className={styles.subtitle}>Developing program to automatically convert Excel-based reports for use in web databases</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>July. 2023 – Dez.2023</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>R&D Total Vehicle Development, 
                 <span className={styles.label}> BMW AG, Munich, Germany</span></div>
                 <div className={styles.subtitle}>Software QA (Test Program Automation), Data Processing Structure/Program Development</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Oct. 2022 – June. 2023</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Product Development, 
                 <span className={styles.label}> FoxInsights GmbH, Munich, Germany</span></div>
                 <div className={styles.subtitle}>Products test, error analysis, development of 3D Print prototypes</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Aug. 2021 – Oct. 2021</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Positional Error Control of Robot Arm,
                 <span className={styles.label}> Kims, Ansan, Rep. Korea</span></div>
                 <div className={styles.subtitle}>Adjust after predicting error values, Error Detection of Robot Arm</div>
                 </div>
             </div>
         </div>

         <div className={styles.section}>
             <div className={styles.category}>Projects </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Jan. 2024 – Present</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>NLP-Based Movie Analysis Project Tutor, 
                 <span className={styles.label}> CodeWith (Rep. Korea) hybrid</span></div>
                 <div className={styles.subtitle}>Create some tutorials/notes for basic knowledge of Python and NLP utilizing Korean Movie Review from Naver (Korean online platform)</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>July. 2023 – Sep 2023</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Fairness of Predictive Modelling Based on Traffic Check Data,
                 <span className={styles.label}> TU Munich, Germany </span></div>
                 <div className={styles.subtitle}>Develop a predictive model for arrest decisions using the North Carolina Policing Dataset </div>
                 </div>
             </div>
        </div>
         <div className={styles.section}>
             <div className={styles.category}>Social Engagement</div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Sep. 2023 – Nov. 2023</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Python Tutor, 
                 <span className={styles.label}> MetaCode (Rep. Korea), hybrid</span></div>
                 <div className={styles.subtitle}>Teaching some tutorials for basic knowledge of python for beginners</div>
                 <div className={styles.subtitle}>Assisting in making simple games using python</div>
                 </div>
             </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.date}>Oct. 2022 – Nov. 2022</div>
                 <div className={styles.details}>
                 <div className={styles.bigtitle}>Staff member of Coding Camp WS22/23, 
                 <span className={styles.label}> Another School org, Munich, Germany</span></div>
                 <div className={styles.subtitle}>Teaching some tutorials for Scratch 3.0</div>
                 </div>
             </div>
         </div>
  
         <div className={styles.section}>
             <div className={styles.category}>Digital Skills </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.details}>
                 <div className={styles.mtitle}>Backend: Python | Java | JavaScript | C++ | SQL (MySQL) | VB | .NET/ VB.NET | MATLAB</div>
                 
                 <div className={styles.mtitle}>Frontend: JavaScript | NEXT.JS | React</div>
                 </div>
             </div>
         </div>
         <div className={styles.section}>
             <div className={styles.category}>Language Skills </div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.details}> 
                    <div className={styles.mtitle}>Korean : 
                    <span className={styles.label}> Mothher Tongue</span></div>
                    <div className={styles.mtitle}>German :
                    <span className={styles.label}> DSH2 (Munich)</span></div>
                    <div className={styles.mtitle}>English : 
                    <span className={styles.label}> Intermediate</span></div>                 
                 </div>
             </div>
         </div>
        
         <div className={styles.section}>
             <div className={styles.category}>Hobby</div>
             <div className={styles.contentsBlocks}>
                 <div className={styles.details}>
                 <div className={styles.mtitle}>Reading : 
                 <span className={styles.label}>
                    <Link href="https://www.instagram.com/buch.bleibt.immer.mit.mir" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className={styles.link}>https:www.instagram.com/buch.bleibt.immer.mit.mir</a>
                        </Link></span></div>
                 <div className={styles.mtitle}>Make Web page : 
                 <span className={styles.label}> 
                 <Link href="https:www.taeyim.de" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className={styles.link}>https:www.taeyim.de</a>
                        </Link></span></div>
                 <div className={styles.mtitle}>Puzzle Game : 
                 <span className={styles.label}> Sudoku, Cubes, Chess</span></div>
                 <div className={styles.mtitle}>Making App-like Game</div>
                 </div>
             </div>
         </div>

       </div>
     );
   }