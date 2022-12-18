import React from 'react';
import Image from 'next/image';
import ProjectItem from './Item';

export default function Project() {
    return (
        <section className=" py-24 bg-kBackgroundColor">
       
                <div className="container">

                    <div className="flex flex-wrap justify-start items-center -mx-4 ">
                     <ProjectItem/>
                     <ProjectItem/>
                     <ProjectItem/>
                     <ProjectItem/>

               
                    </div>

                </div>
        </section>
    )
}
