import React from 'react'

interface ProductCardProps {
    id: number
    title: string , 
    price : number , 
    image : string , 
    onClickProp ?: ()=> void
}

const ProductCard: React.FC<ProductCardProps> = ({id,title,price,image,onClickProp}): JSX.Element => {
  return <div className='productCardWrapper cursor-pointer hover:scale-105 transition-all duration-150 w-80 bg-white border-2 border-neutral-200 rounded-md shadow-md text-black font-mono flex flex-col items-center' 
  onClick={onClickProp}>

    <div className="productImgWrapper bg-white h-80">
        <img src={image} alt="ProductPhoto" />
    </div>


    <div className="productInfoWrapper h-20 w-full flex flex-col justify-between px-4 font-dana my-7">

        <div className="productTitleWrapper">
            <h1 className="productTitle text-xl"> {title} </h1>
        </div>

        <div className="productPriceWrapper w-full h-full flex justify-end items-end font-dana">
            <h2 className="productPrice"> <span className='text-lg font-bold'>{price}</span> تومان </h2>
        </div>
        
    </div>

  </div>
}

export default ProductCard