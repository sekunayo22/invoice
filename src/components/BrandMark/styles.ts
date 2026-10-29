import styled from "@emotion/styled";
import { primary02, primary01 } from "../../styles/abstracts/variables";

export const BrandMarkRoot = styled.div`
  position: relative;
  width: 103px;
  height: 103px;
  flex: 0 0 103px;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  background: ${primary01};

  @media (max-width: 760px) {
    width: 80px;
    height: 80px;
    flex-basis: 80px;
  }
`;

export const BrandBase = styled.div`
  position: absolute;
  inset: 0;
  background: ${primary01};
`;

export const BrandWave = styled.div`
  position: absolute;
  inset: 50.49% 0 -50.49%;
  background: ${primary02};
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: 0 -52px;
  -webkit-mask-size: 103px 103px;
  mask-repeat: no-repeat;
  mask-position: 0 -52px;
  mask-size: 103px 103px;
  transform: scaleX(-1);
`;

export const BrandSymbol = styled.div`
  position: absolute;
  top: 32.32%;
  left: 31.07%;
  width: 38.83%;
  aspect-ratio: 40 / 37.7078;

  @media (max-width: 760px) {
    transform: scale(0.8);
    transform-origin: top left;
  }
`;
