import React from 'react'

export default function ItemSkill() {
    return (
        <div className=' lg:w-[440px] w-[340px] rounded-[20px] bg-kBackgroundColor2 lg:p-[20px] lg:mx-[12px] p-[14px] mx-[6px]'>
            <div className="flex  items-center">
            <img src="/ic/ic-flutter.png" className=" w-16 mr-1" alt="" />
                <div className="content ml-2">
                    <h1 className="lg:text-[24px] text-[20px] font-semibold text-white mb-1">
                    Flutter
                    </h1>
                    <h1 className="lg:text-[18px] text-[14px] text-[#A8B1D0] mt-1">
                    Flutter is an open source <br /> framework by Google.
                    </h1>
                </div>
            </div>
        </div>
    )
}
