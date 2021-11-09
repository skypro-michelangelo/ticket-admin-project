import { FC } from 'react';

import { StyledTitle } from './style';

const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
