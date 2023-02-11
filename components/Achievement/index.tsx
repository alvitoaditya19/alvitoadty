import { padding } from '@mui/system';
import Image from 'next/image';
import React from 'react'
import { Slide } from 'react-slideshow-image';

export default function MyAchievement() {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
    }
    const slideImages = [
        {
            url: '/images/sertif3.png',
            caption: 'Champion of APPS Competition UBP TechnoDay 5.0 2021'
        },
        {
            url: '/images/sertif4.jpg',
            caption: 'Champion of Hackathon Maliki Tech Festival 2022'
        },
        {
            url:'/images/sertif1.png',
            caption: 'Runner Up of Innovation APPS on Gebyar ICT 2022'

        },
        {
            url: '/images/sertif2.png',
            caption: 'Runner Up of Innovation APPS on Gebyar ICT 2021'

        },
    ];
    return (
        <div className=" bg-kBackgroundColor lg:pt-16 pt-14">
            <div className="container">
                <div className="flex text-center">
                    <div className="w-full header-wrap pb-10">
                        <p className="text-base font-semibold text-kGreenColor">
                            My Programming Achievement
                        </p>
                        <h2 className="title-gradient font-semibold text-[30px] mt-2">
                            Reaching New Champions: A Story of Success
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start items-center -mx-4 ">
                    <div className="w-full lg:w-1/4 px-4  rounded-2xl relative md:mb-0 mb-[40px] justify-center items-center flex">
                        <Image
                            src="/ic/ic-gold.png"
                            width={250}
                            height={250}
                            alt="console"
                            className='rounded-2xl relative'
                        />
                    </div>

                    <div className="w-full lg:w-3/4 px-4 rounded-2xl relative md:mb-20 mb-10">
                        <Slide duration={2000}>
                            {slideImages.map((slideImage, index) => (
                                <div key={index} className="text-center justify-center">
                                    <div className='lg:h-[500px] h-[260px] rounded-[30px] lg:mx-20 mx-10 relative' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

                                    </div>
                                    <h1 className='text-white lg:text-2xl text-lg font-semibold lg:mt-5 mt-3'>{slideImage.caption}</h1>
                                </div>
                            ))}
                        </Slide>
                        <Image
                            src="/ic/ic-gold2.png"
                            width={80}
                            height={80}
                            alt="console"
                            className=' top-[-40px] absolute right-8 lg:hidden inline'
                        />
                        <Image
                            src="/ic/ic-gold2.png"
                            width={140}
                            height={140}
                            alt="console"
                            className=' top-[-40px] absolute right-8 lg:inline hidden'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
