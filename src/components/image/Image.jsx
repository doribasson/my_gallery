import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Image({ src, alt, style }) {
  const placeholder =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&usqp=CAU";
  return (
    <LazyLoadImage
      src={src}
      alt={`Image Alt-${alt}`}
      className="img-lazy"
      width={"100%"}
      height={"100%"}
      placeholderSrc={placeholder}
      effect="blur"
      style={style}
    />
  );
}

export default Image;
