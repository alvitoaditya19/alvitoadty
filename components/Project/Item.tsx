import Image from 'next/image';
import React from 'react';

export default function ProjectItem() {
    return (
        <div className="w-full md:w-1/4 px-4  rounded-2xl static md:mb-0 mb-[40px]">
            <div className="item flex flex-col items-center justify-end  bg-kBackgroundColor2 p-4 rounded-2xl relative">
                <div>
                    <Image
                        src="/images/pro-1.png"
                        width={500}
                        height={500}
                        alt="console"
                        className='rounded-2xl relative'


                    />
                    <div className='absolute  top-0 right-0 p-2 m-4 rounded-bl-2xl bg-kBackgroundColor2'>
                        <div className="flex items-center">
                            <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='mb-1'>
                                <path d="M16.7323 0.927051C17.0316 0.00574017 18.3351 0.00574017 18.6344 0.927051L21.9491 11.1287C22.083 11.5407 22.4669 11.8197 22.9002 11.8197H33.6268C34.5955 11.8197 34.9983 13.0593 34.2146 13.6287L25.5366 19.9336C25.1861 20.1883 25.0394 20.6396 25.1733 21.0517L28.488 31.2533C28.7873 32.1746 27.7329 32.9407 26.9492 32.3713L18.2711 26.0664C17.9206 25.8117 17.4461 25.8117 17.0956 26.0664L8.41754 32.3713C7.63383 32.9407 6.57935 32.1746 6.8787 31.2533L10.1934 21.0517C10.3273 20.6396 10.1806 20.1883 9.83014 19.9336L1.15212 13.6287C0.368404 13.0593 0.77118 11.8197 1.7399 11.8197H12.4665C12.8998 11.8197 13.2837 11.5407 13.4176 11.1287L16.7323 0.927051Z" fill="#E100FF" />
                            </svg>
                            <h1 className='text-white ml-2 font-medium  text-[24px]'>4.8</h1>

                        </div>
                    </div>
                </div>
                <p className="mt-[30px] text-2xl text-white mb-2 text-center font-medium">
                    MedicalCare UI
                 
                </p>

                <p className=" text-xl text-kGreyColor mb-[30px] text-center">
                    User Interface Design
                 
                </p>
                
                <div className="flex flex-col items-center absolute bottom-[-24px]">
                    <a className="btn btn-project  text-white py-2 px-12 rounded-full justify-center text-[20px] font-medium">
                    See Detail
                    </a>
                </div>
                
            </div>
        </div>
    )
}
