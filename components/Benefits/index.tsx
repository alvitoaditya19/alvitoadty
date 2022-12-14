import React from 'react'

export default function Benefits() {
  return (
   <>
       <section className="benefits bg-kBackgroundColor lg:pb-12 pb-6">
        <div className="container">
            <div className="row text-center fade-up ">
                <div className="col-6/6 col-12 header-wrap">
                    <p className="text-base font-semibold text-kGreenColor">
                        OUR SUPER BENEFITS
                    </p>

                    
                    <h2 className="title-gradient font-semibold text-[30px]">
                        Learn Faster & Better
                    </h2>
                </div>
            </div>
            <div className="row mt-10">
                <div className="w-6/6 md:w-3/12 px-4 mb-8 md:mb-0">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            Diversity
                        </h3>
                        <p className="support text-kGreyColor mt-3">
                            Learn from anyone around the <br/> world and get a new skills
                        </p>
                    </div>
                </div>
                <div className="w-6/6 md:w-3/12 px-4 mb-8 md:mb-0">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-1.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            A.I Guideline
                        </h3>
                        <p className="support text-kGreyColor mt-3">
                            Lara will help you to choose <br/> which path that suitable for you
                        </p>
                    </div>
                </div>
                <div className="w-6/6 md:w-3/12 px-4 mb-8 md:mb-0">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-2.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            1-1 Mentoring
                        </h3>
                        <p className="support text-kGreyColor mt-3">
                            We will ensure that you will get <br/> what you really do need
                        </p>
                    </div>
                </div>
                <div className="w-6/6 md:w-3/12 px-4 mb-8 md:mb-0">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-3.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            Future Job
                        </h3>
                        <p className="support text-kGreyColor mt-3">
                            Get your dream job in your dream <br/> company together with us
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
