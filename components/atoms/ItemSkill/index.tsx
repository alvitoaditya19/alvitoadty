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
        <a className=' lg:w-[440px] w-[340px] rounded-[20px] bg-white lg:p-[18px] lg:mx-[12px] p-[14px] mx-[6px] hover:border-4 hover:border-kBlueColor' href='#'>
            <div className="flex  items-center">           
                <img src={thumbnail} className=" w-16 mr-1" alt="" />
                <div className="content ml-2">
                    <h1 className="lg:text-[24px] text-[20px] font-semibold text-kBlackColor mb-1">
                        {name}
                    </h1>
                    <h1 className="lg:text-[18px] text-[14px] text-kGreyColor1 mt-1">
                        {desc}
                    </h1>
                </div>
            </div>
        </a>
    )
}
