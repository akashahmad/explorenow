import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { P, H } from "@atoms";
import {bigImage} from '@images'
const NewsBlog = () => {
    return (
        <>
          <div className="w-10/12">
        <div className="flex flex-wrap">
          {/* <div style={{backgroundImage: `url(${bg_fashon})`,minWidth:"260px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>

              {/* <StaticImage
                className="h-full"
                src="../../assets/images/big-image.png"
              /> */}
            </div>
            <div>
              <H subHeading>
              Mauris elementum leo accumsan tempor magna elementum leo
              </H>
              <div className="flex font-futura text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>
              {/* <StaticImage
                className="h-full"
                src="../../assets/images/fashon.png"
              /> */}
            </div>
            <div className=" pt-2">
              <div>
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                </H>
              </div>
              <div className="flex font-futura py-2 text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>
              {/* <StaticImage
                className="h-full"
                src="../../assets/images/fashon.png"
              /> */}
            </div>
            <div className="pt-2">
              <div>
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                </H>
              </div>
              <div className="flex font-futura py-2 text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>
              {/* <StaticImage
                className="h-full"
                src="../../assets/images/fashon.png"
              /> */}
            </div>
            <div className="pt-2">
              <div>
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                </H>
              </div>
              <div className="flex font-futura py-2 text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>
              {/* <StaticImage
                className="h-full"
                src="../../assets/images/fashon.png"
              /> */}
            </div>
            <div className="pt-2">
              <div>
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                </H>
              </div>
              <div className="flex font-futura py-2 text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
          <div className="w-30 mr-5 fit-content">
            <div>
          <div style={{backgroundImage: `url(${bigImage})`,minWidth:"200px",minHeight:"170px",backgroundRepeat:"no-repeat"}}></div>
              {/* <StaticImage
                className="h-full"
                src="../../assets/images/fashon.png"
              /> */}
            </div>
            <div className="pt-2">
              <div>
                <H>
                  Mauris elementum leo accumsan tempor magna elementum leo
                </H>
              </div>
              <div className="flex font-futura py-2 text-xs items-center">
                <P>February 16,2020</P>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default NewsBlog;
