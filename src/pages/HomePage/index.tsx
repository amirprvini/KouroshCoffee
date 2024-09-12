import React from 'react';


interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (): JSX.Element => {

  return <div className='homePageWrapper flex flex-col gap-5'>
        <div className="imageWrapper bg-KouroshBackGround w-full h-screen bg-right-bottom bg-black bg-opacity-75 flex items-center" >
            <div className="homePageButtonWrapper w-full flex justify-center items-center">

                {/* <button className='homePageButton text-white bg-black bg-opacity-60 rounded-md py-1 px-6 font-dana text-3xl'>منوی سفارش</button> */}

            </div>
        </div>


    {/* <div className="slider-container">
      
      <Slider {...settings}>
        
      <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>

      </Slider>

    </div> */}

  </div>
}

export default HomePage