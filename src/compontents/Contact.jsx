import ContactUs from "../assets/image/ContactUs.png";
function Contact() {
  return (
    <section>
      <div className="Container Relative  Py-48 My-48">
      <span className="Bluebox "></span>
        <div className="Row Py-sm-48">
          <div className="Col-lg-6 Col-12">
            {" "}
         
            <p className=" Relative Contactline Bg-text Font-family Fw-600">
              Contact US
            </p>
            <h2 className="Pt-14 Text-40 Font-family Fw-700 ">Get in touch!</h2>
            <div className="Flex Gap-12 Pt-48">
            <input type="text" id="fname" name="firstname" className="W-50 inputclass" placeholder="Full Name "/>
            <input type="text" id="fname" name="email" className="W-50 inputclass" placeholder="Email Address"/></div>
            <input type="text" id="fname" name="Company" className="W-100 inputclass Pt-29" placeholder="Company Name"/>
            <input type="text" id="fname" name="Company" className="W-100 inputclass Pt-29" placeholder="Message"/>
            <button className='Common-Button Common-btn-p Font-family Cursor Fw-700 Mt-48'>Submit</button>
          </div>
          <div className="Col-lg-6 Col-12 Pt-24">
            <div className="Flex Justify-content-center Justify-content-lg-start"><img className=" Translate W-75 W-lg-100" src={ContactUs} alt="countarc" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
