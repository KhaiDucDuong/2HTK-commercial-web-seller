"use client";

import { Rating } from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";
import SetColor from "@/app/components/products/SetColor";
import { useCallback } from "react";
import ProductImage from "@/app/components/products/ProductImage";

interface ProductDetailsProps {
  product: any;
}
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  const handleColorSelect = useCallback((value: SelectedImgType)=> {},[])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage product={product} handleColorSelect={handleColorSelect}></ProductImage>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div>
          <span className="font-semibold">PRICE:</span>{" "}
          {formatPrice(product.price)}
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <SetColor
        images={product.images}
        handleColorSelect={handleColorSelect}
        />
      </div>
    </div>
  );
};
export default ProductDetails;
