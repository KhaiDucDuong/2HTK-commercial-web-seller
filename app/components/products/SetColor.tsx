'use client';

import { SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import { useState } from "react";

interface SetColorProps{
    images: SelectedImgType[],
    handleColorSelect: (value: SelectedImgType) =>void
}
const SetColor:React.FC<SetColorProps> = ({
    images,handleColorSelect
}) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    return ( <div>
        <div className="flex gap-4 items-center">
            <span className="font-semibold">COLOR:</span>
            <div className="flex gap-1">
                {images.map((image, index)=>{
                    const handleClick = () => {
                        setSelectedColor(image.color);
                        handleColorSelect(image);
                    };
                    return (
                        <div className={`
                        h-7
                        w-7
                        rounded-full
                        border-teal-300
                        flex
                        items-center
                        justify-center
                        ${selectedColor === image.color ? "border-[1.5px]" : "border-none"}
                        `}
                        onClick={handleClick}
                        key={image.color}>
                            <div style={{background: image.colorCode}} className="
                            h-5
                            w-5
                            rounded-full
                            border-[1.2px]
                            border-slate-300
                            cursor-pointer
                            "></div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div> );
}
 
export default SetColor;