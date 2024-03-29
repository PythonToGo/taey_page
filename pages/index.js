import Head from 'next/head';
import Image from "next/legacy/image";
import Layout from '../components/layout';
import Hero from '../components/home/hero';
// import Animation from '../components/home/animation';
import Cube from './cubehome';

export default function Home() {

    return (
        <Layout>

            <Head>
                <title>Taey&apos;s World</title>
                <meta name="description" content="The way we live like Hedgehog" />
                <link rel="icon" href="/hedge2.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <Hero/>
                
                </div>
            </section>
            {/* <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Cube />
                </div>
            </section> */}
        </Layout>

    );
}

