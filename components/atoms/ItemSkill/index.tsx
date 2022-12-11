import React from 'react'

export default function ItemSkill() {
    return (
        <div className=' w-[440px] rounded-[20px] bg-kBackgroundColor2 p-[20px] mx-[12px]'>
            <div className="flex">
            <img src="/ic/ic-flutter.png" className=" w-16 mr-1" alt="" />
                <div className="content ml-2">
                    <h1 className="text-[24px] font-semibold text-white mb-1">
                    Flutter
                    </h1>
                    <h1 className="text-[18px]  text-[#A8B1D0] mt-1">
                    Flutter is an open source <br /> framework by Google.
                    </h1>
                </div>
            </div>
        </div>
    )
}
