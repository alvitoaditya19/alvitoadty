import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Header from '../components/Headers'
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import Project from '../components/Project';
import MyAchievement from '../components/Achievement';
import Education from '../components/Education';
import Experience from '../components/Experience';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Head>
        <title>Muhammad Alvito Aditya</title>
        <meta name="description" content="Muhammad Alvito Aditya" />
        <link rel="icon" href="/images/my-logo.png" />
      </Head>
      <Navbar />
      <Header />
      <Benefits />
      <Experience />
      <Skills />
      <Project />
      <MyAchievement /> 
      <Footer /> 
    </>
  )
}
