import React from 'react'
import FeaturedCard from './FeaturedCard'

export default function Featured() {
  return (
    <>
       <section className="featured-game pt-50 pb-50 bg-kBackgroundColor">
        <div className="container-fluid">
            <h2 className="text-4xl font-bold title-gradient mb-30 text-start"  data-aos="fade-up" data-aos-duration="400">My Featured<br/>Professional Skills
            </h2>
            <div className="flex flex-row flex-lg-wrap overflow-setting lg:justify-between gap-lg-3 gap-4 mt-6"
                data-aos="fade-up">
                <FeaturedCard image="/images/skill1.png" name='Programming' category='Hard skill'/>
                <FeaturedCard image="/images/skill2.png" name='Electrical Enginner' category='Hard skill'/>
                <FeaturedCard image="/images/skill3.png" name='Impressive Design' category='Soft skill'/>
                <FeaturedCard image="/images/skill4.png" name='Good Leadership' category='Team'/>
                <FeaturedCard image="/images/skill5.png" name='Team work' category='Organize'/>
            </div>
        </div>
    </section>
    </>
  )
}
