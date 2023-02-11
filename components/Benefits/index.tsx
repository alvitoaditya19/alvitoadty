import React from 'react'

export default function Benefits() {
    return (
        <>
            <section className="benefits bg-kBackgroundColor lg:pb-10 pb-8 pt-8 lg:pt-10">
                <div className="container">
                    <div className="flex text-center">
                        <div className="col-6/6 col-12 header-wrap">
                            <p className="text-base font-semibold text-kGreenColor">
                                My Proffesional Skills
                            </p>
                            <h2 className="title-gradient font-semibold text-[30px] mt-2">
                                Grow and Level Up From Here
                            </h2>
                        </div>
                    </div>
                    <div className="row mt-8">
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-1.png" className="icon" alt="" />
                                <h3 className="title text-white">
                                    Professional
                                </h3>
                                <p className="support text-kGreyColor mt-3">
                                    With my professional services, you'll receive a top-quality website that exceeds your expectations.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-2.png" className="icon" alt="" />
                                <h3 className="title text-white">
                                    Creative
                                </h3>
                                <p className="support text-kGreyColor mt-3">
                                    Take your creative website and application to the next level with my professional solutions.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-3.png" className="icon" alt="" />
                                <h3 className="title text-white">
                                    Expertise
                                </h3>
                                <p className="support text-kGreyColor mt-3">
                                    With my full-stack skills, you'll get a website that not only looks great, but also performs exceptionally well.
                                </p>
                            </div>
                        </div>
                        <div className="w-6/6 md:w-1/4 px-4 mb-8 md:mb-0">
                            <div className="item-benefit">
                                <img src="/ic/ic_globe-4.png" className="icon" alt="" />
                                <h3 className="title text-white">
                                    24/7 Services
                                </h3>
                                <p className="support text-kGreyColor mt-3">
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
