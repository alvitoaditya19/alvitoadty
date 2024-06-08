import React from 'react'

export default function Benefits() {
    return (
        <>
            <section className="benefits bg-kBackgroundColor lg:pb-10 pb-8 pt-8 lg:pt-10">
                <div className="container mx-auto">
                    <div className="flex text-center">
                        <div className="w-full header-wrap" data-aos="fade-up" data-aos-duration="1000">
                            <p className="text-base font-semibold text-kOrangeColor" >
                                My Proffesional Skills
                            </p>
                            <h2 className="title-gradient font-semibold text-[30px] mt-2">
                                Grow and Level Up From Here
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-8">
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-1.png" className="icon" alt="" />
                                <h3 className="font-medium text-[20px] text-kBlackColor">
                                    Professional
                                </h3>
                                <p className="  text-kGreyColor1 mt-3">
                                    With my professional services, you'll receive a top-quality website that exceeds your expectations.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-2.png" className="icon" alt="" />
                                <h3 className="font-medium text-[20px] text-kBlackColor">
                                    Creative
                                </h3>
                                <p className="  text-kGreyColor1 mt-3">
                                    Take your creative website and application to the next level with my professional solutions.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-3.png" className="icon" alt="" />
                                <h3 className="font-medium text-[20px] text-kBlackColor">
                                    Expertise
                                </h3>
                                <p className="  text-kGreyColor1 mt-3">
                                    With my full-stack skills, you'll get a website that not only looks great, but also performs exceptionally well.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-4.png" className="icon" alt="" />
                                <h3 className="font-medium text-[20px] text-kBlackColor">
                                    24/7 Services
                                </h3>
                                <p className="  text-kGreyColor1 mt-3">
                                Stay ahead of the curve with my 24/full-stack development solutions available whenever you need them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
