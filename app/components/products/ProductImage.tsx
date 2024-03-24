"use client";
import { SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";
import { useEffect, useState } from "react";
interface ProductImageProps{
    product: any;
    handleColorSelect:(value: SelectedImgType)=>void;
}
const ProductImage: React.FC<ProductImageProps> = ({ product, handleColorSelect }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");

    // Set initial selected image
    useEffect(() => {
        if (product.images.length > 0) {
            setSelectedImage(product.images[0].image);
        }
    }, [product.images]);
    return (
        <div className="
            grid 
            grid-cols-6
            gap-2
            h-full
            max-h-[500px]
            min-h-[300px]
            sm: min-h-[400px]
        ">
            <div className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                cursor-pointer
                border
                h-full
                max-h
                max-h-[500px]
                min-h-[300px]
                sm: min-h-[400px]
            ">
                {product.images.map((image: SelectedImgType) => {
                    const handleClick = () => {
                        handleColorSelect(image);
                        setSelectedColor(image.color);
                    };
                    return (
                        <div
                            key={image.color}
                            onClick={handleClick}
                            className={`relative w-[80%] aspect-square rounded border-teal-300 ${selectedColor === image.color ? "border-[1.5px]" : "border-none"}`}
                        >
                            <Image src={image.image} alt={image.color} fill className="object-contain" />
                        </div>
                    );
                })}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image fill className="
                w-full
                h-full
                object-contain
                max-h-[500px]
                min-h-[300px]
                sm: min-h-[400px]
                
                "
                src={selectedImage}
                alt={product.name}></Image>
            </div>
        </div>
    );
};
 
export default ProductImage;