import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import H from "../../atoms/heading";
const SingleFeaturedPost = () => {
  return (
  <div>
<StaticImage src="../../../assets/images/featuredImageOne.png" alt="featuredImage" />
<div className="pt-3 pb-4">
<H>Mauris elementum leo 
accumsan tempor magna</H>
</div>
  </div>
  );
};

export default SingleFeaturedPost;
