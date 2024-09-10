import { MdKeyboardArrowUp } from "react-icons/md";

interface ItemCardProps {
    imgUrl : string , 
    cardTitle : string , 
    isClickedProp : boolean ,
    onClickProp : ()=> void
}

const ItemCard:React.FC<ItemCardProps> = ({imgUrl,cardTitle,isClickedProp,onClickProp}): JSX.Element => {
  return <div className="w-4/5 lg:w-3/4 group transition-all cursor-pointer duration-300 border-b-2 border-b-black" onClick={onClickProp}>
        <div className="cardHeader flex justify-between py-3 px-2">
            
            <div className="cardTitleWrapper text-white bg-black rounded-sm py-1 px-6 font-Vazirmatn text-lg sm:text-xl lg:text-2xl">
                <h1 className="cardTitle">بار گرم</h1>
            </div>

            <div className="arrowIconWrapper font-bold text-xl sm:text-2xl lg:text-3xl flex items-end">
                <p className={`arrowIcon ${isClickedProp && 'rotate-180'}`}> <MdKeyboardArrowUp /> </p>    
            </div>

        </div>

        {isClickedProp && <div className="cardMenuWrapper flex flex-col gap-3">
            
            </div>}
  </div>
}

export default ItemCard