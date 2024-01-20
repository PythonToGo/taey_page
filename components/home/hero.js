import Animation from "./animation";

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The way live
                <br className="hidden lg:inline-block"/>like Hedgehog!
            </h1>
            <p className="mb-8 leading-relaxed">ABCDDEFEF EF dfeknno Hi I am Taey  Hi I am Taey  Hi I am Taey  Hi I am Taey  Hi I am Taey  Hi I am Taey ieowibfo lkdlkf eig osdv l</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Go to Project</button>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            </div>
        </>
    );
}