/* eslint-disable react/jsx-key */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './mainCaroselData';



    // <div className="item" data-value="1">1</div>,
    // <div className="item" data-value="2">2</div>,
    // <div className="item" data-value="3">3</div>,
    // <div className="item" data-value="4">4</div>,
    // <div className="item" data-value="5">5</div>,


export const MainCarousel = () => {

    const items = mainCaroselData.map((item)=> <img className='cursor-pointer -z-10' 
    role='presentation' src={item.image} alt="" /> )

    return(
        <>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </>
    )
 };