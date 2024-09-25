import React from 'react'

interface ProductCardProps {

}

const ProductCard: React.FC<ProductCardProps> = (): JSX.Element => {
  return <div className='productCardWrapper w-80 bg-white border-2 border-neutral-200 rounded-md shadow-md text-black font-mono flex flex-col items-center'>

    <div className="productImgWrapper bg-white">
        <img src="./images/Screenshot (149)_prev_ui.png" alt="ProductPhoto" />
    </div>


    <div className="productInfoWrapper w-full flex justify-between px-4 font-dana my-7">

        <div className="productTitleWrapper">
            <h1 className="productTitle text-xl"> کیف پارچه ای </h1>
        </div>

        <div className="productPriceWrapper">
            <h2 className="productPrice"> 350,0000 تومان </h2>
        </div>
        
    </div>

  </div>
}

export default ProductCard