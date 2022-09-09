import { Wrapper } from "./Loader.styled";

import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Wrapper>
      <Oval
        height={100}
        width={100}
        color="#C70704"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="orange"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Wrapper>
  );
};

export default Loader;