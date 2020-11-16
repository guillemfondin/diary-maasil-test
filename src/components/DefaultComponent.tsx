import React, { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NewsAPI } from 'api-service';
import NavBarComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import FooterComponent from './FooterComponent';
const DefaultComponent = (): ReactElement => {
  return (
    <>
      <NavBarComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  );
};

export default DefaultComponent;
