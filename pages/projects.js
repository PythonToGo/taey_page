import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';


export default function Projects({projects}) {

    console.log(projects);

    return (
        <Layout>
            <Head>
                <title>Taey`s Portfolio</title>
                <meta name="description" content="The way we live like Hedgehog" />
                <link rel="icon" href="/hedge2.ico" />
            </Head>
            <h1 className="animate-bounce text-4xl font-bold text-center mt-10 ">All Projects : {projects.results.length -1 }</h1>
            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </div>
        </Layout>
    ); 
}



// build time = calling

export async function getStaticProps() {
    

    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            // Accept: 'application/json',
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

    const projects = await res.json();
    console.log(projects);

    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// import Layout from '../components/layout';
// import Head from 'next/head';
// import { TOKEN, DATABASE_ID } from '../config';
// import ProjectItem from '../components/projects/project-item';


// export default function Projects({projects}) {

//     console.log(projects);

//     return (
//         <Layout>
//             <Head>
//                 <title>Taey`s Portfolio</title>
//                 <meta name="description" content="The way we live like Hedgehog" />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <h1>All Projects : {projects.results.length} </h1>

//             {projects.results.map((aProject) => (
//                 <ProjectItem key={aProject.id} data={aProject} />
//             ))}

//         </Layout>
//     );
// }

// export async function getStaticPaths() {
//     // Fetch the list of projects
//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
//         method: 'POST',
//         headers: {
//             'accept': 'application/json',
//             // Accept: 'application/json',
//             'Notion-Version': '2022-06-28',
//             'content-type': 'application/json',
//             'authorization': `Bearer ${TOKEN}`
//         },
//         body: JSON.stringify({ page_size: 100 })
//     });
//     const { results } = await res.json();

//     // Get the paths we want to pre-render based on projects
//     const paths = results.map((project) => ({
//         params: { id: project.id },
//     }));

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false };
// }


// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the project using params.id
//     const res = await fetch(`https://api.notion.com/v1/pages/${params.id}`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${TOKEN}`,
//             'Notion-Version': '2022-06-28',
//         },
//     });
//     const project = await res.json();

//     return {
//         props: { project },
//     };
// }