import React, { useRef, useState } from 'react';
import Image from 'next/image';
import ProjectItem from './Item';
import { projectData } from '../Data/data';

export default function Project() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [scrollStartX, setScrollStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    const handleMouseDown = (e: any) => {
      setIsMouseDown(true);
      if (scrollContainerRef.current) {
        setScrollStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
      }
    };
    
    const handleMouseMove = (e: any) => {
      if (!isMouseDown) return;
      e.preventDefault();
      if (scrollContainerRef.current) {
        const scrollX = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (scrollX - scrollStartX) * 2; // Adjust the scrolling speed here
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      }
    };
    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            className="lg:pt-10 pt-8 bg-kBackgroundColor"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="container mx-auto">
                <div className="flex text-center">
                    <div className="w-full header-wrap pb-6">
                        <p className="text-base font-semibold text-kGreenColor">
                            My Professional Skills
                        </p>
                        <h2 className="title-gradient font-semibold text-[30px] mt-2">
                            The Best Project From Me
                        </h2>
                    </div>
                </div>
                <div className="parent-container">
                    <div
                        className="flex flex-col md:flex-row md:overflow-x-auto md:overflow-y-hidden md:whitespace-nowrap hide-scrollbar md:h-[450px]"
                        ref={scrollContainerRef}
                    >
                        {projectData.map((data, key) => (
                            <ProjectItem
                                key={key}
                                id={data.id}
                                link={data.link}
                                name={data.name}
                                category={data.category}
                                technology={data.technology}
                                image={data.image}
                                subName={data.subName}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
