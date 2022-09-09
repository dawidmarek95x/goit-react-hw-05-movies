import { useState } from "react";
import { Img } from "./ImageWithCheck.styled";

const ImageWithCheck = ({ src, alt, check, maxWidth}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const errorHandler = () => {
    setImgSrc("https://via.placeholder.com/500x750/9E9E9E/231E1E?text=No+Image");
  }

  return (
    <>
      {!check && <Img maxWidth={maxWidth} src="https://via.placeholder.com/500x750/9E9E9E/231E1E?text=No+Image" alt={alt} />}
      {check && <Img maxWidth={maxWidth} onError={errorHandler} src={imgSrc} alt={alt} />}
    </>
  );
};

export default ImageWithCheck;
