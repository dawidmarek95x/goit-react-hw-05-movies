import { useState } from "react";

const ImageWithCheck = ({ src, alt, check }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const errorHandler = () => {
    setImgSrc("https://via.placeholder.com/500x750/FEE6E6/231E1E?text=No+Image");
  }

  return (
    <>
      {!check && <img src="https://via.placeholder.com/500x750/FEE6E6/231E1E?text=No+Image" alt={alt} />}
      {check && <img onError={errorHandler} src={imgSrc} alt={alt} />}
    </>
  );
};

export default ImageWithCheck;
