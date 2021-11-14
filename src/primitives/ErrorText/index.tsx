import { FC } from 'react';

import { StyledErrorText } from './styles';

const ErrorText: FC = ({ children }) => {
  return <StyledErrorText>{children}</StyledErrorText>;
};

export default ErrorText;
