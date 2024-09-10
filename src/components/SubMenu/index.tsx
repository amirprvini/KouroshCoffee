import React from 'react'

interface SubMenuProp {
    titleProp : string , 
    recipeProp : string , 
    priceProp : string 
}

const SubMenu: React.FC<SubMenuProp> = ({titleProp,recipeProp,priceProp}): JSX.Element => {
  return <div className='subMenuWrapper w-full flex flex-col gap-2 border-b-2 border-b-neutral-500 py-3'>
        
        <div className="subMenuHeaderWrapper flex justify-between text-black">
            <h2 className="subMenuTitle">{titleProp}</h2>
            <h3 className="subMenuPrice">{priceProp}</h3>
        </div>

        <div className="subMenuRecipeWrapper">
            <p className="subMenuRecipe text-neutral-500">
                {recipeProp}
            </p>
        </div>
  </div>
}

export default SubMenu