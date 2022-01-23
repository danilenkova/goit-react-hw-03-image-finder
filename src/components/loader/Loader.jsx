import { TailSpin } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin
        arialLabel="loading-indicator"
        color="#8ec5fc"
        heigth="100px"
        width="100px"
      />
    </LoaderContainer>
  );
};

export default Loader;
