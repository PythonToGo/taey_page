import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-blue-300">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-blue-300">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav> */}
                </div>
                {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-blue-300">CATEGORIES</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div> */}
                {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-blue-300">SUBSCRIBE</h2>
                    <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                        <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600s dark:text-blue-300">Placeholder</label>
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded">Button</button>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:text-left text-center dark:text-blue-300">Bitters chicharrones fanny pack
                    </p>
                </div> */}
                </div> 
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                
                <Link href="/" legacyBehavior>
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-400 rounded-full" viewBox="0 0 24 24">
                    <text x="14" y="10" textAnchor="middle" dy=".3em" fill="currentColor" fontFamily='Lucida Handwriting' fontSize="23">
                        ty
                    </text>
                </svg>






                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-orange-400 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.6h7.6l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z" />
                </svg> */}

                <span className="ml-3 text-xl ">Taey&apos;s World</span>
                </a>
                </Link>

                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Taey —
                    {/* <a href="https://github.com/PythonToGo" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@PythonToGo</a> */}
                    <a href="mailto:pythontogoplease@gmail.com" className="text-gray-600 ml-1">@PythonToGo</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    
                    {/* linkedin */}
                    <Link href="https://www.linkedin.com/in/taeyoungkimtaey/" legacyBehavior>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </Link>


                    {/* github */}
                    <Link href="https://github.com/PythonToGo" legacyBehavior>
                        <a className="ml-3 text-gray-500"> 
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 16 16">
                                <path stroke="none" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </Link>


                    {/* gitlab */}
                    <Link href="https://gitlab.com/PythonToGo" legacyBehavior>
                        <a className="ml-3 text-gray-500">
                        <svg width="20" height="20" viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                            <path d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z" fill="#6B7280" />
                            <path d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z" fill="#6B7280" />
                            <path d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z" fill="#6B7280" />
                            <path d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z" fill="#6B7280" />
                            <path d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z" fill="#6B7280" />
                            <path d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z" fill="#6B7280" />
                            <path d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z" fill="#6B7280" />
                        </svg>
                        </a>
                    </Link>

                    {/* open kakao */}
                    <Link href="https://open.kakao.com/o/so2ZKE5f" legacyBehavior>
                        <a className="ml-3 text-gray-500">
                        <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.125 0H1.875C.839 0 0 .84 0 1.875v20.25C0 23.161.84 24 1.875 24h20.25C23.161 24 24 23.16 24 22.125V1.875C24 .839 23.16 0 22.125 0zM12 18.75c-.591 0-1.17-.041-1.732-.12-.562.396-3.813 2.679-4.12 2.722 0 0-.125.049-.232-.014s-.088-.229-.088-.229c.032-.22.843-3.018.992-3.533-2.745-1.36-4.57-3.769-4.57-6.513 0-4.246 4.365-7.688 9.75-7.688s9.75 3.442 9.75 7.688c0 4.245-4.365 7.687-9.75 7.687zM8.05 9.867h-.878v3.342c0 .296-.252.537-.563.537s-.562-.24-.562-.537V9.867h-.878a.552.552 0 0 1 0-1.101h2.88a.552.552 0 0 1 0 1.101zm10.987 2.957a.558.558 0 0 1 .109.417.559.559 0 0 1-.219.37.557.557 0 0 1-.338.114.558.558 0 0 1-.45-.224l-1.319-1.747-.195.195v1.227a.564.564 0 0 1-.562.563.563.563 0 0 1-.563-.563V9.328a.563.563 0 0 1 1.125 0v1.21l1.57-1.57a.437.437 0 0 1 .311-.126c.14 0 .282.061.388.167a.555.555 0 0 1 .165.356.438.438 0 0 1-.124.343l-1.282 1.281 1.385 1.835zm-8.35-3.502c-.095-.27-.383-.548-.75-.556-.366.008-.654.286-.749.555l-1.345 3.541c-.171.53-.022.728.133.8a.857.857 0 0 0 .357.077c.235 0 .414-.095.468-.248l.279-.73h1.715l.279.73c.054.153.233.248.468.248a.86.86 0 0 0 .357-.078c.155-.071.304-.268.133-.8l-1.345-3.54zm-1.311 2.443.562-1.596.561 1.596H9.376zm5.905 1.383a.528.528 0 0 1-.539.516h-1.804a.528.528 0 0 1-.54-.516v-3.82c0-.31.258-.562.575-.562s.574.252.574.562v3.305h1.195c.297 0 .54.231.54.515z" fill="#6B7280" />
                        </svg>                        </a>
                    </Link>

                    
                    {/* instagram */}
                    <Link href="https://www.instagram.com/buch.bleibt.immer.mit.mir/" legacyBehavior>
                        <a className="ml-3 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                        </a>
                    </Link>

                    
                </span>
                </div>
            </div>
            </footer>
        </>
    );
}