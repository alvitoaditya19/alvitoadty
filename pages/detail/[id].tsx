
import React, { useState, useEffect, useRef } from 'react'
import cx from "classnames";

import NavBar from '../../components/Navbar'
import { projectData } from '../../components/Data/data';
import Link from 'next/link';

export default function DetailProject({ dataItem }: any) {
    const [image, setTmage] = useState(dataItem[0].image[0]);
    const [imageCon1, setImageCon1] = useState(dataItem[0].image[0]);
    const [imageCon2, setImageCon2] = useState("");
    const [imageCon3, setImageCon3] = useState("");
    const [imageCon4, setImageCon4] = useState("");

    const handleClick1 = (event: any) => {
        setTmage(event.target.getAttribute('src'))
        setImageCon1(event.target.getAttribute('src'))
    };
    const handleClick2 = (event: any) => {
        setTmage(event.target.getAttribute('src'))
        setImageCon2(event.target.getAttribute('src'))
    };

    const handleClick3 = (event: any) => {
        setTmage(event.target.getAttribute('src'))
        setImageCon3(event.target.getAttribute('src'))
    };

    const handleClick4 = (event: any) => {
        setTmage(event.target.getAttribute('src'))
        setImageCon4(event.target.getAttribute('src'))
    };

    const classItem = cx({
        "overflow-hidden cursor-pointer rounded-2xl ": true,
        // "mb-30": true,
        "ring-2 ring-indigo-500 ": false,
    });
    const buttonRef = useRef(null);
    useEffect(() => {
        console.log("dada", dataItem)
    })

    return (
        <>
            <NavBar />
            <section className="section bg-kBackgroundColor">
                <div className="container p-2 mx-auto  max-w-7xl">
                    <div className="flex flex-row flex-wrap py-4">
                        <main role="main" className="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
                            <h1
                                className="mb-2 text-3xl font-bold leading-normal tracking-tight text-white sm:text-4xl md:text-4xl"
                            >
                                {dataItem[0].name}
                            </h1>
                            <p className="text-kGreyColor">{dataItem.subName}</p>
                            <section id="gallery">
                                {/* <img src="/imgzul/gallery-1.png" alt="" className="w-full mt-6 rounded-2xl" /> */}
                                <img src={image} alt="" className="w-full mt-6 rounded-2xl md:h-[480px] h-[250px]" />

                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    <div className={image === imageCon1 ? "overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl" : "overflow-hidden cursor-pointer rounded-2xl"}>
                                        <img src={dataItem[0].image[0]} className="w-full h-full" alt="" onClick={handleClick1} />
                                    </div>
                                    <div className={image === imageCon2 ? "overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl" : "overflow-hidden cursor-pointer rounded-2xl"} >
                                        <img src={dataItem[0].image[1]} className="w-full h-full" alt="" onClick={handleClick2} />
                                    </div>
                                    <div className={image === imageCon3 ? "overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl" : "overflow-hidden cursor-pointer rounded-2xl"}>
                                        <img src={dataItem[0].image[2]} className="w-full h-full" alt="" onClick={handleClick3} />
                                    </div>
                                    <div className={image === imageCon4 ? "overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl" : "overflow-hidden cursor-pointer rounded-2xl"}>
                                        <img src={dataItem[0].image[3]} className="w-full h-full" alt="" onClick={handleClick4} />
                                    </div>
                                </div>
                            </section>
                            <section className="" id="orders">
                                <h1 className="mt-8 mb-3 text-lg font-semibold text-white">About</h1>
                                <div className="text-kGreyColor">
                                    <p className="pb-4">
                                        {dataItem[0].about}
                                    </p>
                                    <p className="pb-4">
                                        <h1 className=' mb-2 text-lg font-semibold text-white'>Technology : </h1>
                                        {dataItem[0].technology.map((technology: any) => <div className="flex  mb-2"><img src="/imgzul/icon-check.png" className="float-right w-5 mt-1" alt="" /><div key={technology}
                                            className=" ml-1 texl-lg">{technology}</div></div>)}
                                    </p>
                                </div>
                            </section>
                        </main>
                        <aside className="w-full px-4 sm:w-1/3 md:w-1/3">
                            <div className="sticky lg:top-20 top-0 w-full pt-4 md:mt-24 ">
                                <div className="p-6 border rounded-2xl">
                                    <div className="mb-4">
                                        <div className="flex mb-4">
                                            <div>
                                                <img src="/images/img-prof2.png" alt="" className="w-16" />
                                            </div>
                                            <div className="block mt-1 ml-4">
                                                <h3 className="font-semibold text-md text-white">Muhammad Alvito Aditya</h3>
                                                <p className="text-kGreyColor text-md">Fullstack Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="mt-5 mb-3 font-semibold text-md text-white">About Me</h1>
                                        <ul className="mb-6 text-kGreyColor">
                                            <li className="mb-2">
                                            Creative Problem-Solving Mastery
                                                <img src="/imgzul/icon-check.png" className="float-right w-5 mt-1" alt="" />
                                            </li>
                                            <li className="mb-2">
                                            Innovative Solutions Achieved
                                                <img src="/imgzul/icon-check.png" className="float-right w-5 mt-1" alt="" />
                                            </li>
                                            <li className="mb-2">
                                            Collaborative Success Stories
                                                <img src="/imgzul/icon-check.png" className="float-right w-5 mt-1" alt="" />
                                            </li>
                                            <li className="mb-2">
                                            Optimized Performance Results
                                                <img src="/imgzul/icon-check.png" className="float-right w-5 mt-1" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="group">
                                        <Link  href={dataItem[0].link} target="_blank" className="btn btn-project inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white rounded-full  md:py-2 md:text-md md:px-10">
                                            <p >
                                                Link 
                                            </p>
                                            <img src="/ic/ic-arrow-right.svg" alt="" />
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const paths = projectData.map((item: any) => ({
        params: {
            id: item.id,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

interface GetStaticProps {
    params: {
        id: string;
    }
}



export async function getStaticProps({ params }: GetStaticProps) {
    const { id } = params;

    return {
        props: {
            dataItem: projectData.filter(item => item.id === id),

        },
    };
}
