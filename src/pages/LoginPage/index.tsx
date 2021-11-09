import { FC } from 'react';

import { LoginPage } from './styles';
import RegisterForm from '../../components/RegisterForm';

const Page: FC = () => {
  return (
    <LoginPage>
      <RegisterForm></RegisterForm>
    </LoginPage>
  );
};

export default Page;
