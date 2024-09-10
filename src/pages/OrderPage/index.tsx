import React, { useState } from 'react'
import ItemCard from '../../components/ItemCard'

const OrderPage: React.FC = (): JSX.Element => {
  const [isClicked,setIsClicked] = useState<boolean>(false) ; 

  return <div className='orderPageWerapper flex gap-3 w-full h-full justify-center items-start px-4 py-6'>

    <ItemCard cardTitle='' imgUrl='' onClickProp={()=>{setIsClicked(!isClicked)}} isClickedProp={isClicked} />

  </div>
}

export default OrderPage