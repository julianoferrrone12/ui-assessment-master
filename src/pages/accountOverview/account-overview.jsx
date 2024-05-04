import React from 'react';
import PropTypes from 'prop-types';
import { Div, Main, Title } from "./styles/style";
import Contact from '../../components/Contact/contact';
import Card from '../../components/Card/card';

export const AccountOverview = ({ data }) => {

  return (
    <Div role="main" aria-label="Account Overview">
      <Title>Account Overview</Title>
      <Contact data={data}></Contact>
      <Main>
        <Card data={data}></Card>
      </Main>
    </Div>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountOverview;
