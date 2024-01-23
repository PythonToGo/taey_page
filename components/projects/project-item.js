import React from 'react';
import Image from 'next/image';

export default function ProjectItem({ data }) {
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github && data.properties.Github.url;
    const gitlab = data.properties.Gitlab && data.properties.Gitlab.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const tags = data.properties.Tags.multi_select;

    return (
        <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Add an image here if you have one */}
            {/* <Image src={yourImageUrl} alt={title} width={400} height={200} className="object-cover" /> */}

            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="mt-2 text-gray-600">{description}</p>

                <div className="mt-4">
                    {github && (
                        <a href={github} className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
                            GitHub
                        </a>
                    )}
                    {gitlab && (
                        <a href={gitlab} className="ml-4 text-pink-500 hover:text-pink-600 transition duration-300 ease-in-out">
                            GitLab
                        </a>
                    )}
                </div>

                <div className="flex flex-wrap items-start mt-4">
                    {tags.map((aTag) => (
                        <span key={aTag.id} className="px-2 py-1 m-1 text-sm rounded-md bg-sky-200 dark:bg-sky-700 text-sky-800 dark:text-sky-200">
                            {aTag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}



////////////////////////////

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function ProjectItem({ data }) {
//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//     };

//     return (
//         <motion.div 
//             className="project-card bg-white shadow-lg rounded-lg overflow-hidden"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//         >
//             <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden">

//             <div className="p-6">
//                 <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
//                 <p className="mt-2 text-gray-600">{description}</p>

//                 <div className="mt-4">
//                     {github && (
//                         <a href={github} className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
//                             GitHub
//                         </a>
//                     )}
//                     {gitlab && (
//                         <a href={gitlab} className="ml-4 text-pink-500 hover:text-pink-600 transition duration-300 ease-in-out">
//                             GitLab
//                         </a>
//                     )}
//                 </div>

//                 <div className="flex flex-wrap items-start mt-4">
//                     {tags.map((aTag) => (
//                         <span key={aTag.id} className="px-2 py-1 m-1 text-sm rounded-md bg-sky-200 dark:bg-sky-700 text-sky-800 dark:text-sky-200">
//                             {aTag.name}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//         </motion.div>
//     );
// }
