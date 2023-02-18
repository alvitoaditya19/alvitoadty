import React from 'react';

export interface ItemSkillTypes {
    name: string,
    desc: string,

    thumbnail: string;
}


export default function ItemSkill(props: ItemSkillTypes) {
    const {
        name, desc, thumbnail,
    } = props;
    return (
        <div className=' lg:w-[440px] w-[340px] rounded-[20px] bg-kBackgroundColor2 lg:p-[18px] lg:mx-[12px] p-[14px] mx-[6px] hover:border-4 hover:border-kPurple'>
            <div className="flex  items-center">           
                <img src={thumbnail} className=" w-16 mr-1" alt="" />
                <div className="content ml-2">
                    <h1 className="lg:text-[24px] text-[20px] font-semibold text-white mb-1">
                        {name}
                    </h1>
                    <h1 className="lg:text-[18px] text-[14px] text-[#A8B1D0] mt-1">
                        {desc}
                    </h1>
                </div>
            </div>
        </div>
    )
}
