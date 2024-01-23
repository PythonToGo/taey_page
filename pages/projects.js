// import Image from 'next/image';
// import Link from 'next/link';
import Layout from '../components/layout';
import { TOKEN, DATABASE_ID } from '../config';
// import projectNames from "../components/projects/project-item";


export default function Projects() {

    // console.log(projectNames);

    return (
        <Layout>
            <title>PROJECTS</title>
            <p>This is temporal PROJECT </p>
            {/* Add more content and styling as needed */}

            {/* <h1>All Projects : {projectNames.length}</h1> */}

        </Layout>
    );
}

// build time = calling

export async function getStaticProps() {
    
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [{
                "property": "Name",
                "direction": "ascending"
            }],
            page_size: 100             
        })
    };
        
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}

//   return { props: { repo } }
// }) satisfies GetStaticProps<{
//   repo: Repo
// }