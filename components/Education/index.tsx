import React from 'react'

export default function Education() {
    return (
        <section className="container-fluid bg-kBackgroundColor mx-auto w-full h-full lg:py-10 py-8" id="education">
            <div className="flex text-center">
                <div className="w-full header-wrap">
                    <p className="text-base font-semibold text-kGreenColor">
                        My Education
                    </p>
                    <h2 className="title-gradient font-semibold text-[30px] mt-2 mb-8">
                        Discover Your Purpose Through My Education
                    </h2>
                </div>
            </div>
            <div className="relative wrap overflow-hidden p-2 h-full">
                <div className="border-2-2 absolute border-opacity-20 bg-kBackgroundColor2 md:h-full h-0 border" style={{ left: "50%" }}></div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline" style={{ textAlign: 'justify' }}>
                    <div className="order-1 md:w-6/12 w-0"></div>
                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8 rounded-full mx-4">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>

                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-kBackgroundColor2">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor">July 2016 - June 2019</time>
                        <h3 className="md:text-lg text-base font-semibold text-white dark:text-white mt-2">SMAN 1 Karawang</h3>
                        <p className="md:text-base text-xs font-normal text-kGreyColor mt-2">Throughout my school journey, I actively engaged in various activity, such as become a leader in Paskibra SMAN 1 Karawang </p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" style={{ textAlign: 'justify' }}>
                    <div className="order-1 md:w-6/12 w-0"></div>
                    <div className="z-20 flex items-center order-1 bg-kBlueColor  w-8 h-8  mx-4 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div className="order-1  rounded-lg  md:w-4/12 w-full px-6 py-4 bg-kBackgroundColor2">
                        <time className="mb-1 text-sm font-normal leading-none text-kGreyColor">July 2019 – June 2023</time>
                        <h3 className="md:text-lg text-base font-semibold text-white dark:text-white mt-2">Universitas Islam Negeri Sunan Gunung Djati Bandung</h3>
                        <p className="md:text-base text-xs font-normal text-white mt-2">Electrical Engineering - GPA: 3.85</p>

                        <p className="md:text-base text-xs font-normal text-kGreyColor mt-2">Throughout my college journey, I actively engaged in various internship programs, gaining hands-on maintenance experience in the manufacturing industry and building an IoT project while working with Raspberry Pi-MERN Stack. Additionally, I actively contributed to several student organizations within the Social and Technology sectors, where I held the position of Division Head in the Research and Development Department.</p>
                    </div>
                    <div className="order-1 md:w-2/12 w-0"></div>
                </div>
            </div>
        </section>
    )
}
