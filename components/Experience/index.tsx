import React from 'react'

export default function Experience() {
    return (
        <section className="container-fluid bg-kBackgroundColor mx-auto w-full h-full lg:py-10 py-8" id='experience'>
            <div className="flex text-center">
                <div className="w-full header-wrap" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-base font-semibold text-kOrangeColor" data-aos="fade-up" data-aos-duration="1000">
                        My Professional Experience
                    </p>
                    <h2 className="title-gradient font-semibold text-[30px] mt-2 mb-8">
                        Experience-Driven Solutions For Professional Growth
                    </h2>
                </div>
            </div>
            <div className="relative wrap overflow-hidden p-2 h-full">
                <div className="border-2-2 absolute bg-white md:h-full h-0 border border-kBlackColor" style={{ left: "50%" }}></div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline" style={{ textAlign: 'justify' }} data-aos="fade-left">
                    <div className="order-1 md:w-6/12 w-0"></div>
                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8 rounded-full mx-4">
                        <h1 className="mx-auto font-semibold text-lg text-kBlackColor">1</h1>
                    </div>

                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-white">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor2">Sept 2022 – Jun 2023</time>
                        <h3 className="md:text-lg text-base font-semibold text-kBlackColor dark:text-kBlackColor mt-2">Electrical Laboratory UIN Bandung</h3>
                        <p className="md:text-base text-xs font-normal text-kBlackColor mt-2">Laboratory Assistant For Microcontroller System Practicum and Mobile Programming Course</p>

                        <p className="md:text-base text-xs font-normal text-kGreyColor2 mt-2">Provide technical support and guidance to students in setting up, configuring, troubleshooting, and understanding microcontroller systems for practical experiments and mobile programming practical, while collaborating with the instructor to develop relevant lab assignments and maintaining the laboratory environment.</p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>
                </div>


                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" style={{ textAlign: 'justify' }} data-aos="fade-right">
                    <div className="order-1 md:w-6/12 w-0"></div>

                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8  mx-4 rounded-full">
                        <h1 className="mx-auto text-kBlackColor font-semibold text-lg">2</h1>
                    </div>
                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-white">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor2">Jan 2022 – Feb 2022</time>
                        <h3 className="md:text-lg text-base font-semibold text-kBlackColor dark:text-kBlackColor mt-2">PT ICHII Industries Indonesia</h3>
                        <p className="md:text-base text-xs font-normal text-kBlackColor mt-2">Equipment Maintenance Internship</p>

                        <p className="md:text-base text-xs font-normal text-kGreyColor2 mt-2">Experienced professional in performing routine maintenance on welding machines (robots), presses, and manual welding equipment, ensuring optimal functionality, while possessing comprehensive knowledge of industrial electronic components. Proven ability to successfully resolve issues with robot welding machines through efficient identification and replacement of faulty components, demonstrating a deep understanding of electrical power mechanisms utilized in the manufacturing industry.</p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>

                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline" style={{ textAlign: 'justify' }}  data-aos="fade-left">
                    <div className="order-1 md:w-6/12 w-0"></div>
                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8 rounded-full mx-4">
                        <h1 className="mx-auto font-semibold text-lg text-kBlackColor">3</h1>
                    </div>

                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-white">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor2">Mar 2022 – Jul 2022</time>
                        <h3 className="md:text-lg text-base font-semibold text-kBlackColor dark:text-kBlackColor mt-2">PT. Kreasi Rekayasa Indonesia (KIREI)</h3>
                        <p className="md:text-base text-xs font-normal text-kBlackColor mt-2">Project Internship</p>

                        <p className="md:text-base text-xs font-normal text-kGreyColor2 mt-2">
                            Developed an innovative smart green house system using the MERN stack for application, Raspberry Pi 3B for Microcontroller, and WebSocket technology, implementing AES-128 CBC encryption for secure data transmission and storage, and seamlessly integrating diverse components for a fully automated and intelligent system.
                        </p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" style={{ textAlign: 'justify' }} data-aos="fade-right">
                    <div className="order-1 md:w-6/12 w-0"></div>

                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8  mx-4 rounded-full">
                        <h1 className="mx-auto text-kBlackColor font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-white">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor2">Jan 2022 – Feb 2022</time>
                        <h3 className="md:text-lg text-base font-semibold text-kBlackColor dark:text-kBlackColor mt-2">PT DNP Indonesia</h3>
                        <p className="md:text-base text-xs font-normal text-kBlackColor mt-2">Technical Staff</p>

                        <p className="md:text-base text-xs font-normal text-kGreyColor2 mt-2">Experienced professional in performing routine maintenance on welding machines (robots), presses, and manual welding equipment, ensuring optimal functionality, while possessing comprehensive knowledge of industrial electronic components. Proven ability to successfully resolve issues with robot welding machines through efficient identification and replacement of faulty components, demonstrating a deep understanding of electrical power mechanisms utilized in the manufacturing industry.</p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>

                </div>

            </div>
        </section>
    )
}
