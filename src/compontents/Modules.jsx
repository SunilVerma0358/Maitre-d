import Modulesimg from '../assets/image/Modules.png';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Modules(){
    return(
        <section className='Overflow-hidden'>
            <div className="Container Py-48 My-48 Relative">
            <p className=" Relative Featuresline Bg-text Font-family Fw-600 Text-center">
            Modules
        </p>
        <h2 className="Pt-14 Text-40 Font-family Fw-700 Text-center ">
          Why Choose <span className="Bg-text">Maître D?</span>
        </h2>
        <MySlider/>
        <div className='Flex Gap-12 Pt-24 Justify-content-end'>
            <span className='Pre '><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19268_2131)">
<path d="M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7262 19.9613C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7262 21.2887C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49833 15.1233 7.49833 15C7.49833 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.4859 8.62409 13.5894 8.55494 13.7033 8.50777C13.8172 8.4606 13.9392 8.43632 14.0625 8.43632C14.1858 8.43632 14.3078 8.4606 14.4217 8.50777C14.5356 8.55494 14.6391 8.62409 14.7262 8.71125C14.8134 8.79842 14.8826 8.90189 14.9297 9.01578C14.9769 9.12967 15.0012 9.25173 15.0012 9.375C15.0012 9.49827 14.9769 9.62033 14.9297 9.73422C14.8826 9.84811 14.8134 9.95158 14.7262 10.0387L10.7006 14.0625H21.5625Z" fill="black"/>
<path d="M15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0ZM21.5625 14.0625C21.8111 14.0625 22.0496 14.1613 22.2254 14.3371C22.4012 14.5129 22.5 14.7514 22.5 15C22.5 15.2486 22.4012 15.4871 22.2254 15.6629C22.0496 15.8387 21.8111 15.9375 21.5625 15.9375H10.7006L14.7262 19.9613C14.8134 20.0484 14.8826 20.1519 14.9297 20.2658C14.9769 20.3797 15.0012 20.5017 15.0012 20.625C15.0012 20.7483 14.9769 20.8703 14.9297 20.9842C14.8826 21.0981 14.8134 21.2016 14.7262 21.2887C14.6391 21.3759 14.5356 21.4451 14.4217 21.4922C14.3078 21.5394 14.1858 21.5637 14.0625 21.5637C13.9392 21.5637 13.8172 21.5394 13.7033 21.4922C13.5894 21.4451 13.4859 21.3759 13.3988 21.2887L7.77375 15.6637C7.68644 15.5767 7.61718 15.4732 7.56991 15.3593C7.52265 15.2454 7.49833 15.1233 7.49833 15C7.49833 14.8767 7.52265 14.7546 7.56991 14.6407C7.61718 14.5268 7.68644 14.4233 7.77375 14.3363L13.3988 8.71125C13.4859 8.62409 13.5894 8.55494 13.7033 8.50777C13.8172 8.4606 13.9392 8.43632 14.0625 8.43632C14.1858 8.43632 14.3078 8.4606 14.4217 8.50777C14.5356 8.55494 14.6391 8.62409 14.7262 8.71125C14.8134 8.79842 14.8826 8.90189 14.9297 9.01578C14.9769 9.12967 15.0012 9.25173 15.0012 9.375C15.0012 9.49827 14.9769 9.62033 14.9297 9.73422C14.8826 9.84811 14.8134 9.95158 14.7262 10.0387L10.7006 14.0625H21.5625Z" fill="url(#paint0_linear_19268_2131)"/>
</g>
<defs>
<linearGradient id="paint0_linear_19268_2131" x1="25.4521" y1="-7.93118e-07" x2="1.19246" y2="2.82566" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD9B2B"/>
<stop offset="1" stop-color="#F14F09"/>
</linearGradient>
<clipPath id="clip0_19268_2131">
<rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)"/>
</clipPath>
</defs>
</svg>
</span>
            <span className=' next '><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19268_2129)">
<path d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2263 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2263 14.3363L16.6012 8.71125C16.4252 8.53521 16.1865 8.43632 15.9375 8.43632C15.6885 8.43632 15.4498 8.53521 15.2738 8.71125C15.0977 8.88729 14.9988 9.12605 14.9988 9.375C14.9988 9.62395 15.0977 9.86271 15.2738 10.0387L19.2994 14.0625H8.4375Z" fill="black"/>
<path d="M15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM8.4375 14.0625C8.18886 14.0625 7.9504 14.1613 7.77459 14.3371C7.59877 14.5129 7.5 14.7514 7.5 15C7.5 15.2486 7.59877 15.4871 7.77459 15.6629C7.9504 15.8387 8.18886 15.9375 8.4375 15.9375H19.2994L15.2738 19.9613C15.1866 20.0484 15.1174 20.1519 15.0703 20.2658C15.0231 20.3797 14.9988 20.5017 14.9988 20.625C14.9988 20.7483 15.0231 20.8703 15.0703 20.9842C15.1174 21.0981 15.1866 21.2016 15.2738 21.2887C15.3609 21.3759 15.4644 21.4451 15.5783 21.4922C15.6922 21.5394 15.8142 21.5637 15.9375 21.5637C16.0608 21.5637 16.1828 21.5394 16.2967 21.4922C16.4106 21.4451 16.5141 21.3759 16.6012 21.2887L22.2263 15.6637C22.3136 15.5767 22.3828 15.4732 22.4301 15.3593C22.4773 15.2454 22.5017 15.1233 22.5017 15C22.5017 14.8767 22.4773 14.7546 22.4301 14.6407C22.3828 14.5268 22.3136 14.4233 22.2263 14.3363L16.6012 8.71125C16.4252 8.53521 16.1865 8.43632 15.9375 8.43632C15.6885 8.43632 15.4498 8.53521 15.2738 8.71125C15.0977 8.88729 14.9988 9.12605 14.9988 9.375C14.9988 9.62395 15.0977 9.86271 15.2738 10.0387L19.2994 14.0625H8.4375Z" fill="url(#paint0_linear_19268_2129)"/>
</g>
<defs>
<linearGradient id="paint0_linear_19268_2129" x1="25.4521" y1="-7.93118e-07" x2="1.19246" y2="2.82566" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD9B2B"/>
<stop offset="1" stop-color="#F14F09"/>
</linearGradient>
<clipPath id="clip0_19268_2129">
<rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)"/>
</clipPath>
</defs>
</svg>
</span>
        </div>

            </div>
        </section>
    )
}
const MySlider = () => {
    const settings = {
arrows:true,
      dots: false,
      infinite: true,
      speed: 500,
 
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
     <div className='Mx-16 Mt-48'>
            <div className="Modulessection Mx-12 Px-12">
                <div className="Row Align-items-center Pt-35">
                    <div className="Col-lg-6 Col-12 Pr-lg-20">
                        <div><img className='  W-100' src={Modulesimg} alt="modules" /></div>
                    </div>
                    <div className='Col-lg-6 Col-12 Pt-24 Pt-lg-0'>
                        <h3>Manage Your <span className='Bg-text'>Customer Queues</span></h3>
                    
                        <p className='Pt-12 Max-w-484 Text-14'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                    <p className='Pt-21 Max-w-484 Text-14'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                    <button className='Common-Button sign-up Mt-25 Cursor'>Buy Now</button>
                    </div>

                </div>
            </div>
        </div> 
         <div className='Mx-16 Mt-48'>
            <div className="Modulessection Mx-12 Px-12">
                <div className="Row Align-items-center Pt-35 ">
                    <div className="Col-lg-6 Col-12 Pr-lg-20">
                        <div className="Flex Justify-content-center Justify-content-lg-start"><img className=' W-100' src={Modulesimg} alt="modules" /></div>
                    </div>
                    <div className='Col-lg-6 Col-12 Pt-24 Pt-lg-0'>
                        <h3>Manage Your <span className='Bg-text'>Customer Queues</span></h3>
                    
                        <p className='Pt-12 Max-w-484 Text-14'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                    <p className='Pt-21 Max-w-484 Text-14'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                    <button className='Common-Button sign-up Mt-25 Cursor'>Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
        
      </Slider>
    );
  };
export default Modules;