import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header />
      <Skills/>
      <Footer />
      <Benefits />

    </>
  )
}