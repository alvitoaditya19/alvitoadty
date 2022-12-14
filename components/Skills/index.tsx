import React from 'react';
import Marquee from "react-fast-marquee";
import ItemSkill from '../atoms/ItemSkill';


export default function Skills() {
    return (
        <>
            <section className="w-[100%] flex justify-center items-center flex-col pt-4 pb-8 overflow-hidden bg-kBackgroundColor">

                <Marquee gradient={false} speed={100} className='marquee' direction='left' >
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    
                </Marquee>
                <Marquee gradient={false} speed={100} className='marquee mt-7' direction='right'>
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                    <ItemSkill />
                </Marquee>

            </section>

        </>
    )
}
