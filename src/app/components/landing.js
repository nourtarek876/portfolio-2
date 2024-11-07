"use client";
import FadeInBottomComponent from "./FadeInBottomComponent";
import FadeInCenterComponent from "./FadeInCenterComponent";
import FadeInLeftComponent from "./FadeInLeftComponent";
import FadeInRightComponent from "./FadeInRightComponent";
import FadeInUpComponent from "./FadeInUpComponent";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Landing() {
  return (
    <>
      <body>
        <Navbar />
        {/* start header */}
        <header className="landing-page">
          <FadeInLeftComponent>
            <div className="header-text">
              <p>Hello 👋 I'm</p>
              <section className="animation">
                <div className="first">
                  <div>Mohamed Mohsen</div>
                </div>
                <div className="second">
                  <div>photographer</div>
                </div>
                <div className="third">
                  <div>image editor</div>
                </div>
              </section>
            </div>
          </FadeInLeftComponent>
          <div className="header-img">
            <FadeInRightComponent>
              <div className="img-cont-hero"></div>
            </FadeInRightComponent>
          </div>
        </header>
        {/* end header */}
        {/* start about */}
        <FadeInCenterComponent>
          {" "}
          <div className="about-sec shadow-inner shadow-white	 border-4	border-slate-200" id="about">
            <div className="about-hero text-blue-50">
              <h1>About</h1>
            </div>
            <div className="about-txt text-blue-50">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </FadeInCenterComponent>
        {/* end about */}
        {/* start my work */}
        <div className="my-work" id="work">
          <div className="work-hero text-blue-50">
           <FadeInBottomComponent><h1>My Work</h1></FadeInBottomComponent>
          </div>
          <div className="work-txt text-blue-50">
           <FadeInLeftComponent><p>Some Of My Best Shots :</p></FadeInLeftComponent> 
          </div>
         <FadeInUpComponent><div className="work-cards">
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card1"></div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card2"></div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card3"></div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card4"></div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card5"></div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className="work-card">
              <div className="firstAnimation">
                <div className="secondAnimation">
                  <div className="card card6"></div>
                </div>
              </div>
            </div>
            {/* card */}
          </div>
          </FadeInUpComponent>
        </div>
        {/* end my work */}
        {/* start Contact */}
        <section className="contact py-16 shadow-inner shadow-white	 border-4	border-slate-200" id="contact">
          <div className="container mx-auto text-center">
           <FadeInUpComponent><h2 className="text-3xl font-bold text-blue-50 mb-10">Get in Touch</h2></FadeInUpComponent>
           <FadeInCenterComponent><form className="max-w-md mx-auto">
              <input
                type="text"
                className="w-full bg-gray-950 p-3 mb-4 rounded contact-msg"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full bg-gray-950 p-3 mb-4 rounded contact-msg"
                placeholder="Your Email"
              />
              <textarea
                className="w-full bg-gray-950 p-3 mb-4 rounded contact-msg"
                placeholder="Your Message"
                rows="5"
              ></textarea>
              <button type="submit" className="bg-primary text-blue-50 py-3 px-6 rounded">
                Send Message
              </button>
            </form>
            </FadeInCenterComponent>
          </div>
        </section>
        {/* end Contact */}
        <Footer />
      </body>
    </>
  );
}
