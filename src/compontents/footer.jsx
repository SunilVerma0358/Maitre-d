import footerlogo from '../assets/image/footerlogo.png'
function footer(){
    return ( 
        <section>
            <div className='Bg-img Relative Overflow-hidden'>
            <span className='Footer-larger'></span>
            <div className='Small-ellipse'></div>           
            <div className='Small-ellipse-right'></div>           
            <div className='Medium-ellipse-right'></div>           
             <div className="Container Text-center Pt-48 Pb-12 ">
                <div className='Cursor'><img className='W-unset W-25' src={footerlogo} alt="footerlogo" /></div>
                <p className='Mx-auto Text-14 Fw-400 Font-family Max-w-375 Color-white Pt-14 Lh-153'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                <div className='Flex Gap51 Justify-content-center Pt-sm-35 Pt-14'>
                    <p className='Text-14 Font-family Fw-600 Color-white Cursor'>Navigation</p>
                    <p className='Text-14 Font-family Fw-600 Color-white Cursor'>Company</p>
                    <p className='Text-14 Font-family Fw-600 Color-white Cursor'>Contact</p>
                </div>
            </div>
            </div>
            <div className=' Bg-black Footerline'>
                <p className='Text-center Color-graylight Font-family Fw-400 Text-12 Py-sm-15 Py-12 Bg-black'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            </div>
        </section>
   
    )
}
export default footer;