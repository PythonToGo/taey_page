import React from 'react';
import Image from "next/legacy/image";;
import { colorMapper } from "../../utils/colorMapper.js";


//////////////////////////////////////
function safeFileName(name) {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

export default function ProjectItem({ data }) {
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github && data.properties.Github.url;
    const gitlab = data.properties.Gitlab && data.properties.Gitlab.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const tags = data.properties.Tags.multi_select;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const imgFileName = safeFileName(title);
    const localImgSrc = `../public/project-cover/${imgFileName}.png`;
    const order = data.properties.Order.number;

    return (
        <div className="flex flex-col project-card bg-orange-300 m-3 shadow-lg rounded-md overflow-hidden">
            
            {/* <Image 
            className='rounded-t-xl'
                src={imgSrc} 
                alt="cover image"
                // alt={title} 
                width={400} 
                height={200} 
                layout="responsive"
                objectFit="cover"
                quality={100}
            /> */}

            <a href={gitlab || github} target="_blank" rel="noopener noreferrer">
                <Image 
                    className='rounded-t-xl'
                    src={imgSrc} 
                    alt="cover image"
                    width={400} 
                    height={200} 
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </a>

            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                <p className="mt-2 text-gray-600">{description}</p>

                {/* GitHub  */}
                <div className="mt-4">
                {github && (
                    <a href={github} className="flex items-center ml-4 text-black-500 hover:text-slate-600 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
                        <svg fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 16 16">
                            <path stroke="none" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.20-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <span className="font-bold">GitHub</span>
                    </a>
                )}

                {/* GitLab  */}
                {gitlab && (
                    <a href={gitlab} className="flex items-center ml-4 text-black-500 hover:text-slate-600 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" className="w-5 h-5 mr-2">
                            <path d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z" fill="#E24329"/>
                            <path d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z" fill="#FC6D26"/><path d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z" fill="#FCA326"/>
                            <path d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z" fill="#E24329"/>
                            <path d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z" fill="#FC6D26"/>
                            <path d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z" fill="#FCA326"/>
                            <path d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z" fill="#E24329"/>
                        </svg>
                        <span className="font-bold">GitLab</span>
                    </a>
                )}
            </div>

                <div className="flex flex-wrap items-start mt-4">
                    {data.properties.Tags.multi_select.map((tag) => (
                        <span key={tag.id} className={`px-2 py-1 m-1 text-sm rounded-md ${colorMapper.getTailwindColor(tag.color)} text-gray-800`}>
                            {tag.name}
                        </span>
                        ))}
                </div>
                 
            
            </div>
        </div>
    );
}