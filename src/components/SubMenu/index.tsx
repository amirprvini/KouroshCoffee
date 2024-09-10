import React from 'react'

interface SubMenuProp {
    titleProp : string , 
    recipeProp : string , 
    priceProp : string ,
    isLastProp : boolean
}

const SubMenu: React.FC<SubMenuProp> = ({titleProp,recipeProp,priceProp,isLastProp}): JSX.Element => {
  return <div className={`subMenuWrapper w-full flex flex-col gap-2 ${!isLastProp && 'border-b-2 border-b-neutral-500'} py-1`}>
        
        <div className="subMenuHeaderWrapper text-black font-Vazirmatn font-semibold flex justify-between px-1">
            <p className="subMenuTitle">{titleProp}</p>
            <p className="subMenuPrice text-black">{priceProp}</p>
        </div>

        <div className="subMenuRecipeWrapper">
            <p className="subMenuRecipe text-neutral-500">
                {recipeProp}
            </p>
        </div>
  </div>
}

export default SubMenu