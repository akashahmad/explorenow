import React from "react";
import { facebook, twitter, instagram, whatsApp, linkedin } from "@images";
const SocialIcon = () => {
  return (
    <>

        <div className="shadow-md w-10 py-3 flex justify-center">
          <img src={facebook} alt="faceBook" />
        </div>
        <div className="shadow-md  w-10  py-3 flex justify-center">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="shadow-md w-10 py-3 flex justify-center">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="shadow-md w-10 py-3 flex justify-center">
          <img src={whatsApp} alt="whatsApp" />
        </div>
        <div className="shadow-md w-10  py-3 flex justify-center">
          <img src={linkedin} alt="linkedin" />
        </div>
    </>
  );
};
export default SocialIcon;
