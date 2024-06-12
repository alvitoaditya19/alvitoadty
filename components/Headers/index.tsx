import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
    const [filled1, setFilled1] = useState(0);
    const [isRunning1, setIsRunning1] = useState(true);

    const [filled2, setFilled2] = useState(0);
    const [isRunning2, setIsRunning2] = useState(true);

    const [filled3, setFilled3] = useState(0);
    const [isRunning3, setIsRunning3] = useState(true);
    useEffect(() => {
        if (filled1 < 90 && isRunning1) {
            setTimeout(() => setFilled1(prev => prev += 2), 40)
        } else if (filled2 < 80 && isRunning2) {
            setTimeout(() => setFilled2(prev => prev += 2), 40)

        } else if (filled3 < 70 && isRunning3) {
            setTimeout(() => setFilled3(prev => prev += 2), 40)

        }
    }, [filled1, filled2, filled3, isRunning1, isRunning2, isRunning3])
    return (
        <>
            <section className="header lg:pt-16 pb-50 bg-kBackgroundColor" id="home">
                <div className="container-fluid lg:px-20 px-6 lg:pt-0 pt-16 lg:pb-0 pb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 my-auto" data-aos="fade-right">
                            <p className="text-support text-lg text-kOrangeColor">
                                #collaborationwithme
                            </p>
                            <h1 className="header-title text-kBlackColor lg:font-bold font-semibold lg:text-[36px] text-[30px] lg:mt-3 mt-2">
                                Hello, i’m Alvito Aditya
                            </h1>

                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    2000,
                                    'Fresh Graduate of Electrical Enginnering',
                                    2000,
                                    'UI Designer',
                                    2000,
                                ]}
                                wrapper="div"
                                className='title-profesi lg:font-bold font-semibold lg:text-[36px] text-[30px]'
                                cursor={true}
                                repeat={Infinity}
                            />
                            <p className=" lg:text-[16px] text-[14px] text-kGreyColor1 lg:mt-4 mt-3">
                                Launch your business website or application today. Grow Your Brand with Impressive and Powerful platform with me!
                            </p>
                            <div className="flex flex-row gap-4 lg:mt-6 mt-3 items-center">
                                <div className="group">
                                    <Link href="/link" className="btn-project  text-white px-12 rounded-full justify-center text-[18px] font-medium">
                                        <p >
                                            Hire Me
                                        </p>
                                        <img src="/ic/ic-arrow-right.svg" alt="" />
                                    </Link>

                                </div>
                                <Link href="https://www.instagram.com/alvitoadty/">
                                    <Image src="/ic/ig.svg" height={30} width={30} alt="" />

                                </Link>
                                <Link href="https://github.com/alvitoaditya19">
                                    <Image src="/ic/github.svg" height={30} width={30} alt="" />

                                </Link>
                                <Link href="https://www.linkedin.com/in/muhammadalvitoaditya/">
                                    <Image src="/ic/linkedin.svg" height={30} width={30} alt="" />
                                </Link>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:block hidden">
                            <div className="flex lg:justify-end justify-center lg:mr-2">
                                <div className="relative">
                                    <img src="/images/img-prof.png" className="max-w-full h-auto" alt=""  data-aos="zoom-in"/>
                                    <div className="card left-card absolute border-0 bg-white" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="d-flex align-items-center mb-2 gap-3">
                                            <h1 className="text-[14px] font-semibold text-kBlackColor">
                                                My Skills
                                            </h1>
                                        </div>
                                        <div className="flex">
                                            <img src="/ic/ic-flutter.png" className=" w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBlackColor">
                                                    App Developer
                                                </h1>
                                                <div className="flex items-center">
                                                <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled1}%`,
                                                            background: "linear-gradient(266.71deg, #0072FF -17.76%, #00C6FF 89.69%)",
                                                            transition: "width 0.5s"
                                                        }}></div>
                                                    </div>
                                                    <span className="progressPercent">{filled1}%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-2">
                                            <img src="/ic/ic-react.png" className=" w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBlackColor">
                                                    Web Developer
                                                </h1>
                                                <div className="flex items-center">
                                                <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled2}%`,
                                                            background: "linear-gradient(266.71deg, #0072FF -17.76%, #00C6FF 89.69%)",
                                                            transition: "width 0.5s"
                                                        }}></div>
                                                    </div>
                                                    <span className="progressPercent">{filled2}%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-2">
                                            <img src="/ic/ic-figma.png" className="w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBlackColor">
                                                    UI/UX Designer
                                                </h1>
                                                <div className="flex items-center">
                                                    <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled3}%`,
                                                            background: "linear-gradient(266.71deg, #0072FF -17.76%, #00C6FF 89.69%)",
                                                            transition: "width 0.5s"
                                                        }}></div>
                                                    </div>
                                                    <span className="progressPercent">{filled3}%</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="card right-card absolute border-0 bg-white" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="relative flex flex-row justify-center mb-6">
                                            <img src="/ic/ic-check.png" className=" rounded-lg w-20" alt="" />
                                            <p className="right-card-support text-white text-xxs text-center absolute m-0">
                                                New</p>
                                        </div>
                                        <div>
                                            <p className="text-[24px] font-semibold text-kBlackColor text-center m-0">100%</p>
                                            <p className="text-[20px] text-kGreyColor items-center text-center font-light  m-0">Verified</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
