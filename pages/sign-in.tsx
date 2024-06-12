import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function SignIn() {
    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //   .then((result) => {
        //     console.log(result.text);
        //   }, (error) => {
        //     console.log(error.text);
        //   });
    };

    return (
        <>
            <section className="py-10 bg-kBackgroundColor sm:py-16 lg:py-24">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="flex flex-col my-auto">
                            <p className="text-support text-lg text-kGreenColor">
                                #collaborationwithme
                            </p>
                            <h1 className='title-profesi lg:font-bold font-semibold lg:text-[30px] text-[24px]'>Grow Your Brand with Impressive and Powerful Platform in here</h1>

                            <p className=" lg:text-[18px] text-[14px] text-kGreyColor lg:mt-4 mt-3">The Best projects real-world from researchvalidate business and user experience
                            </p>
                            <div className="flex flex-row gap-4 lg:mt-6 mt-3 items-center">
                                <div className="group">
                                    <Link href="/sign-in" className="btn-project  text-white px-12 rounded-full justify-center text-[18px] font-medium">
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

                        <div className="lg:pl-12">
                            <div className="overflow-hidden bg-white rounded-3xl">
                                <div className="p-6 sm:p-10">
                                    <form action="#" method="POST" className="mt-4">
                                        <div className="space-y-8">

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-kBlackColor "> Full Name </label>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 mt-[14px] rounded-full  border border-kBlackColor ">
                                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                                                        <img src="/ic/ic-user.svg" alt="" />
                                                    </span>
                                                    <input type="text" placeholder="Placeholder" className="px-3 py-4 placeholder-kBlackColor text-kBlackColor relative bg-transparent  text-sm border border-kBlackColor outline-none focus:outline-none focus:ring w-full pl-10 rounded-full focus:bg-transparent" />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-kBlackColor "> Email address </label>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 mt-[14px] rounded-full">
                                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                                                        <img src="/ic/ic-email.svg" alt="" />
                                                    </span>
                                                    <input type="email" placeholder="Placeholder" className="px-3 py-4 placeholder-kBlackColor text-kBlackColor relative bg-transparent  text-sm border border-kBlackColor outline-none focus:outline-none focus:ring w-full pl-10 rounded-full focus:bg-transparent" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-kBlackColor "> Brief </label>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 mt-[14px] rounded-full ">
                                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                                                        <img src="/ic/ic-brief.svg" alt="" />
                                                    </span>
                                                    <input type="text" placeholder="Placeholder" className="px-3 py-4 placeholder-kBlackColor text-kBlackColor relative bg-transparent  text-sm border border-kBlackColor outline-none focus:outline-none focus:ring w-full pl-10 rounded-[16px] focus:bg-transparent pb-20" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-kBlackColor "> Range Budget </label>
                                                <div className="relative flex w-full flex-wrap items-stretch mb-3 mt-[14px] rounded-full">
                                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-4">
                                                        <img src="/ic/ic-budget.svg" alt="" />
                                                    </span>
                                                    <input type="text" placeholder="Placeholder" className="px-3 py-4 placeholder-kBlackColor text-kBlackColor relative bg-transparent  text-sm border border-kBlackColor outline-none focus:outline-none focus:ring w-full pl-10 rounded-full focus:bg-transparent" />
                                                </div>
                                            </div>
                                            <div className="group">
                                                <Link href="/sign-in" className="btn-project  text-kBlackColor rounded-full justify-center text-[18px] font-medium">
                                                    <p >
                                                        See Detail
                                                    </p>
                                                    <img src="/ic/ic-arrow-right.svg" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
