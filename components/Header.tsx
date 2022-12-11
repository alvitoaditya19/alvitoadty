import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        if (filled < 80 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 2), 50)
        }
    }, [filled, isRunning])
    return (
        <>
            <section className="header lg:pt-16 pb-50 bg-kBackgroundColor">
                <div className="container-xxl container-fluid">
                    <div className="row gap-lg-0 gap-5">
                        <div className="col-lg-6 col-12 my-auto">
                            <p className="text-support lg:text-[18px] text-[14px] text-kGreenColor">
                                #collaborationwithme
                            </p>
                            <h1 className="header-title text-white lg:font-bold font-semibold lg:text-[36px] text-[24px] lg:mt-3 mt-2">
                                Hello, i’m Alvito Aditya
                            </h1>

                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    2000,
                                    'Electrical Engineering Student',
                                    2000,
                                    'UI Designer',
                                    2000,


                                ]}
                                wrapper="div"
                                className='title-profesi lg:font-bold font-semibold lg:text-[36px] text-[24px]'
                                cursor={true}
                                repeat={Infinity}

                            />
                       
                            <p className=" lg:text-[18px] text-[14px] text-kGreyColor lg:mt-4 mt-3">Launch your business website or application today. Grow Your Brand with Impressive and Powerful platform with me!
                            </p>


                            <div className="d-flex flex-lg-row flex-column gap-4 lg:mt-6 mt-3">
                                <a className="btn lg:text-lg text-base text-white rounded-pill btn-get-started lg:px-12 lg:py-3 " href="#feature" role="button">Get
                                    Started</a>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12 md:block hidden">
                            <div className="flex justify-content-lg-end justify-content-center me-lg-5">
                                <div className="position-relative" data-aos="zoom-in">
                                    <img src="/images/img-prof2.png" className="img-fluid" alt="" />
                                    <div className="card left-card position-absolute border-0">
                                        <div className="d-flex align-items-center mb-2 gap-3">
                                            <h1 className="text-[14px] font-semibold text-kBackgroundColor">
                                                My Skills
                                            </h1>
                                        </div>
                                        <div className="flex">
                                            <img src="/ic/ic-flutter.png" className=" w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBackgroundColor">
                                                    App Developer
                                                </h1>
                                                <div className="flex items-center">
                                                    <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled}%`,
                                                            backgroundColor: "#7F00FF",
                                                            transition: "width 0.5s"
                                                        }}></div>

                                                    </div>
                                                    <span className="progressPercent">{filled}%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-2">
                                            <img src="/ic/ic-react.png" className=" w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBackgroundColor">
                                                Web Developer
                                                </h1>
                                                <div className="flex items-center">
                                                    <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled}%`,
                                                            backgroundColor: "#7F00FF",
                                                            transition: "width 0.5s"
                                                        }}></div>

                                                    </div>
                                                    <span className="progressPercent">{filled}%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex mt-2">
                                            <img src="/ic/ic-figma.png" className=" w-8 mr-1" alt="" />
                                            <div className='content'>
                                                <h1 className="text-[12px] font-semibold text-kBackgroundColor">
                                                UI/UX Designer
                                                </h1>
                                                <div className="flex items-center">
                                                    <div className="progressbar">
                                                        <div style={{
                                                            height: "100%",
                                                            width: `${filled}%`,
                                                            backgroundColor: "#7F00FF",
                                                            transition: "width 0.5s"
                                                        }}></div>

                                                    </div>
                                                    <span className="progressPercent">{filled}%</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card right-card position-absolute border-0">
                                        <div className="position-relative d-flex flex-row justify-content-center mb-24">
                                            <img src="/ic/ic-check.png" className="rounded-pill w-20" alt="" />
                                            <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                                                New</p>
                                        </div>
                                        <div>
                                            <p className="text-[24px] font-semibold text-kBackgroundColor text-center m-0">100%</p>
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
