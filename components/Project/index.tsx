import React from 'react';
import Image from 'next/image';
import ProjectItem from './Item';
import {projectData} from '../Data/data';


export default function Project() {
    return (
        <div className="lg:pt-10 pt-8 bg-kBackgroundColor">
            <div className="container mx-auto">
                <div className="flex text-center">
                    <div className="w-full header-wrap pb-6">
                        <p className="text-base font-semibold text-kGreenColor">
                            My Proffesional Skills
                        </p>
                        <h2 className="title-gradient font-semibold text-[30px] mt-2">
                            The Best Project From Me
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-start items-center -mx-4 ">
                    {/* <ProjectItem name='Vegetable Classification APP With Flutter' category='Mobile Apps' image='/images/project1.svg'/>
                    <ProjectItem name='Movie Stream APP With Flutter' category='Mobile Apps'  image='/images/project2.svg'/>
                    <ProjectItem name='Vacation and Hotel APPS With Flutter' category='Mobile Apps' image='/images/project3.svg'/>
                    <ProjectItem name='IOT Dashboard APP With Flutter' category='Mobile Apps'  image='/images/project4.svg'/> */}
                    {
                        projectData.map((data, key) =>{
                          return  <ProjectItem id={data.id} name={data.name} category={data.category} suitable={data.suitable} image={data.image} subName={data.subName}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
