import React, {useEffect, useState} from 'react'
import ProductCard from '../../components/ProductCard'
import { ProductType } from '../../types/product.type';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../components/services/api';

const AllProductsPage: React.FC = (): JSX.Element => {

  const [products,setProducts] = useState<ProductType[]>([]);

  useEffect(()=>{

  getAllProducts().then((res:ProductType[])=>{
        setProducts(res)
  })

    },[])


    const navigate = useNavigate() ; 
    const handleClick = (productId:number)=>{
          navigate(`/products/${productId}`)
    }

  return <div className='productsWrapper w-full flex justify-center'>

          <ul className='productsList w-full sm:w-4/5 flex flex-wrap justify-center gap-x-3 gap-y-8 py-5'>
          
          {products.map((product:ProductType)=>{
            return <li key={product.id}>
              <ProductCard id={product.id} image={product.productImage} title={product.productName} price={product.price} onClickProp={()=>{handleClick(product.id)}} />
            </li>
          })}

          </ul>

  </div>
}

export default AllProductsPage