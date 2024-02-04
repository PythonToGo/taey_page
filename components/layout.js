import Header from './header';
import Footer from './footer';
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <h1>LAYOUT! </h1> */}
      <div>{children}</div>
      <Footer />
    </>

  );
}
