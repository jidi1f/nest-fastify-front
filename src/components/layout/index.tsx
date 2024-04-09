import React from 'react';
import * as S from './styled-components';
import { Header } from '../header';
import { ComponentProps } from '../types';
import { Sidebar } from '../tool-bar';
import { CssBaseline } from '@mui/material';

export const Layout = ({ children }: ComponentProps) => {
  return (
    <S.AppContainer>
      <CssBaseline />
      <Header />
      <Sidebar />
      <S.Main component="main">{children}</S.Main>
    </S.AppContainer>
  );
};
