import React from 'react';
import { FC } from 'react';

import { StyledImage } from './styles';

type Props = {
  src?: string;
};

const Img: FC<Props> = ({ src, children }) => {
  return <StyledImage src={src}>{children}</StyledImage>;
};

export default Img;
