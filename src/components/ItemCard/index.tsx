import { MdKeyboardArrowUp } from "react-icons/md";
import { subMenu } from "../../types/subMenu.type";
import SubMenu from "../SubMenu";

interface ItemCardProps {
    cardTitle : string , 
    cardId : number ,
    isClickedProp : number ,
    menuProp : subMenu [] ,
    onComplete : (id:number) => void
}

const ItemCard:React.FC<ItemCardProps> = ({cardTitle,cardId,isClickedProp,menuProp,onComplete}): JSX.Element => {

  return <div className="w-4/5 lg:w-3/4 group transition-all cursor-pointer duration-300 border-b-2 border-b-black" onClick={()=>{
    
  console.log('card Id: ' , cardId)  
  console.log('is Clicked: ' , isClickedProp)
  onComplete(cardId)

  }}>
        <div className="cardHeader flex justify-between py-3 px-2">
            
            <div className="cardTitleWrapper text-white bg-black rounded-sm py-1 px-6 font-iranyekan text-lg sm:text-xl lg:text-2xl">
                <h1 className="cardTitle">{cardTitle}</h1>
            </div>

            <div className="arrowIconWrapper font-bold text-xl sm:text-2xl lg:text-3xl flex items-end">
                <p className={`arrowIcon ${isClickedProp === cardId && 'rotate-180'}`}> <MdKeyboardArrowUp /> </p>    
            </div>

        </div>

        {isClickedProp === cardId && <div className="cardMenuWrapper transition-all duration-500 flex flex-col gap-3 mb-5">
            {menuProp.map((subMenu:subMenu,index)=>{
                return <li key={index}> <SubMenu titleProp={subMenu.title} priceProp={subMenu.price} recipeProp={subMenu.recipe} isLastProp={subMenu.isLast} /> </li>
            })}
            </div>}
  </div>
}

export default ItemCard