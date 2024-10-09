import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductType } from '../../types/product.type';
import Container from '../../components/Container';
import { getProductById } from '../../components/services/api';

interface IProductPage {}

const ProductPage: React.FC<IProductPage> = (): JSX.Element => {

    const [product,setProduct] = useState<ProductType>() ; 

    const param = useParams();

    useEffect(()=>{

        getProductById(param.id || '').then((res)=>{
            setProduct(res) ;
        })

    },[])

  return <>
    <Container>
        <div className='productPageWrapper flex flex-col lg:flex-row my-5 text-3xl'>

            <div className="productImageWrapper flex justify-center h-96">
                <img src={product?.productImage} alt="productPhoto" className='w-80 sm:w-96'/>
            </div>

            <div className="productTitleWrapper font-iranyekan font-semibold px-6 sm:mt-8">
                <h1 className="productTitle">
                    {product?.productName}
                </h1>
            </div>

        </div>
    </Container>
  </>
}

export default ProductPage
