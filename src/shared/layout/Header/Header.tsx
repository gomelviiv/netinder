import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';
import { logOut } from '@redux/components/login/login.slice';
import { useGetUserInformationQuery } from '@redux/components/user/user.api';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import Alert from '../../components/Alert';
import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavigationButton,
  HeaderRightContent,
  Link,
  UserImg,
} from './styles';

const Header: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  const {
    isLoading: isLoadingUser,
    data: dataUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUserInformationQuery(loginState.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleExit = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isLoadingUser ? (
        <p>Loading...</p>
      ) : (
        <HeaderContainer>
          {isErrorUser && <Alert error={errorUser} />}
          <HeaderNavigation>
            <HeaderNavigationButton onClick={handleGoBack}>
              <ArrowBackIcon />
              <Typography> Назад</Typography>
            </HeaderNavigationButton>

            <Link to="/home">
              <HomeIcon /> <Typography> Главная</Typography>
            </Link>
            <HeaderRightContent>
              {dataUser && <UserImg src={`${dataUser.photo}`}>{dataUser.name[0]}</UserImg>}
              <HeaderNavigationButton onClick={handleExit}>
                <LogoutIcon /> <Typography> Exit </Typography>
              </HeaderNavigationButton>
            </HeaderRightContent>
          </HeaderNavigation>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
