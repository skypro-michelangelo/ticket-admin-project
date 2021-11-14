import { FC } from 'react';

import { StyledInputText } from './styles';

const InputText: FC = ({ children }) => {
  return <StyledInputText>{children}</StyledInputText>;
};

export default InputText;
