import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';
import { colorMapper } from '@/utils/colorMapper';

export default function Projects({projects, tags }) {
    console.log(projects);
    return (
        <Layout>
            <Head>
                <title>Taey&apos;s World</title>
                <meta name="description" content="The way we live like Hedgehog" />
                <link rel="icon" href="/hedge2.ico" />
            </Head>
            <h1 className="animate-bounce text-4xl font-bold text-center mt-10 ">All Projects : {projects.results.length -1 }</h1>
            
            {/* show tags list  */}
            <div className="mt-8 mb-12">
                <div className="flex flex-wrap justify-center mt-4">
                    {tags?.map(tag => (
                        <span
                            key={tag.id}
                            className={`px-2 py-1 m-1 text-sm rounded-md  ${colorMapper.getTailwindColor(tag.color)}`}
                        >
                        {tag.name}
                        </span>
                    ))}
                    
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </div>
        </Layout>
    ); 
}

export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                "property": "Order",
                "direction": "ascending"
            }
        ],
            page_size: 100             
        })
    };
        
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json();
    
    // tags list created
    const tagList = [];

    projects.results.forEach((project) => {
        project.properties.Tags.multi_select.forEach((tagObj) => {
            if (!tagList.some((t) => t.id === tagObj.id)) {
            tagList.push(tagObj);
            }
        });
    });

    return {
        props: { 
            projects,
            tags: tagList
        }
    };
}