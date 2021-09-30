import React from "react";
import {
  facebook,
  twitter,
  instagram,
  whatsApp,
  linkedin,
  facebookBlue,
} from "@images";
import { Img } from "@atoms";
const SocialIcon = () => {
  return (
    <>
      <div className=" faceBookMain hover:shadow-md border-2 w-10  m-1 py-2 flex justify-center cursor-pointer bg-white">
        <Img src={facebook} alt="faceBook" />
        <Img className=" hidden" src={facebookBlue} alt="faceBook" />
      </div>
      <div className=" hover:shadow-md w-10 border-2 m-1 py-2 flex justify-center cursor-pointer bg-white">
        <Img src={twitter} alt="twitter" />
      </div>
      <div className="hover:shadow-md w-10 border-2 m-1 py-2 flex justify-center cursor-pointer bg-white">
        <Img src={instagram} alt="instagram" />
      </div>
      <div className="hover:shadow-md w-10 border-2 m-1 py-2 flex justify-center cursor-pointer bg-white">
        <Img src={whatsApp} alt="whatsApp" />
      </div>
      <div className="hover:shadow-md w-10 border-2 m-1 py-2 flex justify-center cursor-pointer bg-white">
        <Img src={linkedin} alt="linkedin" />
      </div>
    </>
  );
};
export default SocialIcon;
