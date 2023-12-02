import logopage from "../assets/image/logo.png";
import search from "../assets/image/search.png";
import arrow from "../assets/image/arrow.png";
function herosection() {
  return (
    <header className="Bg-hero-img Flex Flex-Col">
      <nav>
        {" "}
        <div className="Container">
          <div className="Flex Justify-content-between Pt-48 ">
            <div className="Flex Align-items-center Gap-12 ">
              <img src={logopage} alt="logo" />
              <p className="Font-family Text-24 Fw-400 ">maître d</p>
            </div>
            <input type="checkbox" id="mobileview"  hidden />
            <label
              for="mobileview"
              className="icon span D-md-none"
            >
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="Flex Align-items-center Navgap nav ">
              <li>
                <a href="#" className="Font-family Cursor">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="Font-family Cursor">
                  Modules
                </a>
              </li>
              <li>
                <a href="#" className="Font-family Cursor">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="Font-family Cursor">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="Font-family Cursor">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="Font-family Cursor">
                  <img src={search} alt="seacrh" />
                </a>
              </li>
            </ul>
          </div>
          {""}
        </div>{" "}
      </nav>
      <div className="Flex-grow">
        <div className="Container Mt-48  Relative">
          <div className="Arrow">
            <img className="W-lg-50 W-50" src={arrow} alt="arrow" />
          </div>
          <h1 className="Max-w-729 Mx-auto Text-center Pt-sm-48 Text-62 Font-family Fw-800 Lspaceing Pt-48">
            Maitre D – Store Management for Barbers
          </h1>
          <div className="Text-center Pt-48">
            <button className="Common-Button Common-btn-p Font-family Cursor Fw-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default herosection;
