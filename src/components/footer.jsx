import React from "react";

function Footer() {
  return (
    <>
      <div className="ftr">
        <div className="frt-s1">
          <h2 className="ftr-h1">My Portfolio</h2>
          <h3 className="ftr-h4">
            A new way to make payments easy, reliable and secure.
          </h3>
        </div>
        <div className="frt-s2">
          <div className="flis-1">
            <h3 className="Li-h">Useful Link</h3>
            <ul className="ul-ul">
              <li className="lis">Content</li>
              <li className="lis">How to works</li>
              <li className="lis">Creates</li>
              <li className="lis">Explore </li>
              <li className="lis">Term & Services</li>
            </ul>
          </div>
          <div className="flis-1">
            <h3 className="Li-h">Community</h3>
            <ul className="ul-ul">
              <li className="lis">Help Center</li>
              <li className="lis">Partner</li>
              <li className="lis">Suggestion</li>
              <li className="lis">Blog</li>
              <li className="lis">Newletters</li>
            </ul>
          </div>
          <div className="flis-1">
            <h3 className="Li-h">Partner</h3>
            <ul className="ul-ul">
              <li className="lis">Our partner</li>
              <li className="lis">Became a partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="frt-s3">
        <div className="ft-a">
          <h3 className="ft-ah3">2022 HooBank. All Rights Reserved</h3>
        </div>
        <div className="ft-b">
          <i class="ri-instagram-line"></i>
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-linkedin-box-fill"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
