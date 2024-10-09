import React, { useContext,useEffect,useRef } from 'react'
import EventCard from '../../components/EventCard'
import { AppContext } from '../../routes'
import { useDispatch, useSelector } from 'react-redux';
import { counterState, increment } from '../../redux/counterSlice';

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = (): JSX.Element => {
  
  const {user} = useContext(AppContext);

  const count = useSelector((state) => state); 
  const dispatch = useDispatch() ; 



  const ref = useRef<any>()

    const handleClick = ()=>{

      dispatch(increment()) ;

      console.log('amir')
        console.log(ref.current.width)
        ref.current.width = 500 ; 
    }

    useEffect(()=>{
        console.log('user: ' , user);
        

    },[])

  return <div className='eventPageWrapper w-full flex flex-wrap justify-center gap-4 px-4 py-8'>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال' ref={ref} onClickProp={()=>{
      handleClick()
     }}/>
    {/* <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
    <EventCard eventAvatarUrl='' eventTitleProp='برگرلند'
     presentByProp='کافه کوروش' eventDateProp="10 آبان" eventTimeProp='19:00' eventLocProp='روف شمال'/>
     */}
  </div>
}

export default EventsPage