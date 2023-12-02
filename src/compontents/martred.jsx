import maitred from "../assets/image/maitred.png";
function maitredsection(){
    return(
        <section>
        <div className='Container'>
          <div className='Row Align-items-center Justify-content-center Pb-48 '>
            <div className='Col-lg-6 Col-12'>
          <div className="Flex Justify-content-center Justify-content-lg-start"><img className="W-md-75 W-100" src={maitred} alt="mailtred" /></div></div>
          <div class="Col-lg-6 Col-12 Pt-24 ">
            <p className='Bg-text Relative line Font-family Fw-600'>About Us</p>
            <h2 className='Pt-14 Text-40 Font-family Fw-700'>What is <span className='Bg-text'>Maître D?</span></h2>
            <p className='Pt-12 Max-w-425 Font-family Fw-400 Lh-168 Color-gray'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p></div>
        </div></div>
        </section> 
    )
}
export default maitredsection;