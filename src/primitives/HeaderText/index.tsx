import { FC } from 'react';

import { StyledHeaderText } from './styles';

const HeaderText: FC = ({ children }) => {
  return <StyledHeaderText>{children}</StyledHeaderText>;
};

export default HeaderText;
