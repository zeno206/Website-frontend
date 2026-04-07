import React from "react";
import Header from "../components/header";
import Landingpage from "../components/landing-bar";
import Section4 from "../components/section-4";
import Review from "../components/review";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="div-1">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/128210-747086064_medium.mp4" type="video/mp4" />
        </video>

        <Header />
        <Landingpage />
      </div>
      <div className="div-2">
        <div className="box-3">
          <h2 className="h2-a">
            You do the <span>business,</span> we'll <span>handle</span> the
            money.
          </h2>
          <p className="p-1">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button>Get started</button>
        </div>
        <div className="box-4">
          <div className="n-1">
            <div className="n-1a">
              <i class="ri-shining-2-fill"></i>
            </div>
            <div className="n-1b">
              <h3 className="nh3">Rewards</h3>
              <p className="nh4">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="n-2">
            <div className="n-1a">
              <i class="ri-edit-circle-line"></i>
            </div>
            <div className="n-1b">
              <h3 className="nh3">100% secured</h3>
              <p className="nh4">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
          <div className="n-3">
            <div className="n-1a">
              <i class="ri-send-plane-line"></i>
            </div>
            <div className="n-1b">
              <h3 className="nh3">Balance transfer</h3>
              <p className="nh4">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-3">
        <Section4 />
      </div>
      <div className="div-4">
        <Review />
      </div>
      <div className="div-5">
        <Footer />
      </div>
    </>
  );
}
export default Home;
