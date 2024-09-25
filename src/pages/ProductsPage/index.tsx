import React from 'react'
import ProductCard from '../../components/ProductCard'
const ProductsPage: React.FC = (): JSX.Element => {
  return <div className='productsWrapper w-full sm:w-4/5 flex flex-wrap justify-center gap-x-3 gap-y-8 py-5'>

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

  </div>
}

export default ProductsPage