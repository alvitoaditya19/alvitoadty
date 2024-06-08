import React, { useRef, useState } from 'react';
import { projectData } from '../Data/data';
import ProjectItem from './Item';

const chunkArray = (array:any, size:any) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function Project() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const reversedProjectData = [...projectData];
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleLoadMore = () => {
    setVisibleProjects(reversedProjectData.length);
  };

  return (
    <section id="projects" className="lg:pt-10 pt-8 bg-kBackgroundColor relative my-auto">
      <div className="container mx-auto my-auto">
        <div className="flex text-center">
          <div className="w-full header-wrap pb-1" data-aos="fade-up" data-aos-duration="1000">
            <p className="text-base font-semibold text-kOrangeColor">My Professional Skills</p>
            <h2 className="title-gradient font-semibold text-[30px] mt-2">The Best Project From Me</h2>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center items-center -mx-4 mt-6">
          <div className="w-full md:w-1/2 px-4 mb-6 flex justify-center">
            <div className="relative">
              <div className="bg-kOrangeColor w-20 h-20 flex justify-center items-center">
                <h1 className='text-center'>alvitoo</h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6 flex justify-center">
            <div className="relative">
              <div className="bg-kOrangeColor w-20 h-20 flex justify-center items-center"></div>
            </div>
          </div>
        </div> */}


        <div className="md:overflow-x-auto md:overflow-y-hidden hide-scrollbar" ref={scrollContainerRef}>
          {chunkArray(reversedProjectData.slice(0, visibleProjects), 3).map((chunk, chunkIndex) => (
            <div className="flex md:flex-nowrap flex-wrap justify-center items-center" key={chunkIndex}>
              {chunk.map((data : any, projectIndex:any)=> (
                <ProjectItem
                  key={projectIndex}
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
          ))}
          <div className="mt-16"></div>
        </div>
      </div>

      {visibleProjects < reversedProjectData.length && (
        <div className="container mx-auto my-auto">
          <div className="flex justify-center">
            <button
              className=" bg-kOrangeColor text-white px-12 rounded-full justify-center text-[18px] font-medium py-2"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
