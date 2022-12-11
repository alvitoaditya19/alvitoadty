import React from 'react'

export default function Benefits() {
  return (
   <>
       <section className="benefits bg-kBackgroundColor">
        <div className="container">
            <div className="row text-center pb-70">
                <div className="col-lg-12 col-12 header-wrap">
                    <p className="story">
                        OUR SUPER BENEFITS
                    </p>
                    <h2 className="">
                        Learn Faster & Better
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            Diversity
                        </h3>
                        <p className="support text-kGreyColor">
                            Learn from anyone around the <br/> world and get a new skills
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-1.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            A.I Guideline
                        </h3>
                        <p className="support text-kGreyColor">
                            Lara will help you to choose <br/> which path that suitable for you
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-2.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            1-1 Mentoring
                        </h3>
                        <p className="support text-kGreyColor">
                            We will ensure that you will get <br/> what you really do need
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="item-benefit">
                        <img src="/ic/ic_globe-3.png" className="icon" alt=""/>
                        <h3 className="title text-white">
                            Future Job
                        </h3>
                        <p className="support text-kGreyColor">
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
