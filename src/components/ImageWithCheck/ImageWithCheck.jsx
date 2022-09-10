import { useState } from "react";
import { Img } from "./ImageWithCheck.styled";
import NoImageAvailable from "../../images/NoImageAvailable.png"

const ImageWithCheck = ({ src, alt, check, maxWidth}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const errorHandler = () => {
    setImgSrc(NoImageAvailable);
  }

  return (
    <>
      {!check && <Img maxWidth={maxWidth} src={NoImageAvailable} alt={alt} />}
      {check && <Img maxWidth={maxWidth} onError={errorHandler} src={imgSrc} alt={alt} />}
    </>
  );
};

export default ImageWithCheck;
