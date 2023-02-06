import React from 'react';
import Marquee from "react-fast-marquee";
import ItemSkill from '../atoms/ItemSkill';


export default function Skills() {
    return (
        <>
            <section className="w-[100%] flex justify-center items-center flex-col pt-4 pb-8 overflow-hidden bg-kBackgroundColor">
                <div className="flex text-center">
                    <div className="w-full header-wrap">
                        <p className="text-base font-semibold text-kGreenColor">
                            My Advanced Skills
                        </p>
                        <h2 className="title-gradient font-semibold text-[30px] mt-2 mb-10">
                            The Latest and Most Advanced Technology
                        </h2>
                    </div>
                </div>
                <Marquee gradient={false} speed={100} className='marquee' direction='left' >
                    <ItemSkill name='Figma' desc='Figma is a collaborative web application for interface design' thumbnail='/ic/ic-figma.png' />
                    <ItemSkill name='Flutter' desc=' Flutter is open-source mobile framework created by Google' thumbnail='/ic/ic-flutter.png' />
                    <ItemSkill name='Fiver' desc='Fiverr connects businesses with freelancers offering digital services' thumbnail='/ic/ic-fiver.png' />
                    <ItemSkill name='Laravel' desc='Laravel is a free and open-source PHP web framework with MVC Architecture' thumbnail='/ic/ic-laravel.png' />
                    <ItemSkill name='MongoDB' desc='MongoDB is a non-relational document database based on JSON' thumbnail='/ic/ic-mongo.png' />
                    <ItemSkill name='Next JS' desc='Next.js is a React framework based on building blocks to create web' thumbnail='/ic/ic-next.png' />
                    <ItemSkill name='Node JS' desc='Node.js is a cross-platform, open-source server environment ' thumbnail='/ic/ic-node.png' />
                    <ItemSkill name='Tensorflow' desc='TensorFlow is open-source software library for machine learning' thumbnail='/ic/ic-tensor.png' />
                    <ItemSkill name='Python' desc='Python is an interpreted, object-oriented, high-level programming' thumbnail='/ic/ic-python.png' />
                    <ItemSkill name='Tailwind CSS' desc='Tailwind is a CSS framework that provides single-purpose utility classes' thumbnail='/ic/ic-tailwind.png' />
                </Marquee>
                <Marquee gradient={false} speed={100} className='marquee mt-8' direction='right'>
                    <ItemSkill name='Figma' desc='Figma is a collaborative web application for interface design' thumbnail='/ic/ic-figma.png' />
                    <ItemSkill name='Flutter' desc=' Flutter is open-source mobile framework created by Google' thumbnail='/ic/ic-flutter.png' />
                    <ItemSkill name='Fiver' desc='Fiverr connects businesses with freelancers offering digital services' thumbnail='/ic/ic-fiver.png' />
                    <ItemSkill name='Laravel' desc='Laravel is a free and open-source PHP web framework with MVC Architecture' thumbnail='/ic/ic-laravel.png' />
                    <ItemSkill name='MongoDB' desc='MongoDB is a non-relational document database based on JSON' thumbnail='/ic/ic-mongo.png' />
                    <ItemSkill name='Next JS' desc='Next.js is a React framework based on building blocks to create web' thumbnail='/ic/ic-next.png' />
                    <ItemSkill name='Node JS' desc='Node.js is a cross-platform, open-source server environment ' thumbnail='/ic/ic-node.png' />
                    <ItemSkill name='Tensorflow' desc='TensorFlow is open-source software library for machine learning' thumbnail='/ic/ic-tensor.png' />
                    <ItemSkill name='Python' desc='Python is an interpreted, object-oriented, high-level programming' thumbnail='/ic/ic-python.png' />
                    <ItemSkill name='Tailwind CSS' desc='Tailwind is a CSS framework that provides single-purpose utility classes' thumbnail='/ic/ic-tailwind.png' />
                </Marquee>
            </section>
        </>
    )
}
