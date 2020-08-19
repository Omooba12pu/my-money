import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Container from '@material-ui/core/Container';
import InvestmentsPage from '../pages/InvestmentsPage';
import styled from 'styled-components';

const StyledMain = styled('main')`
  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      margin-left: 256px;
    }
  `}
`;

const Page: FC = () => {
  return (
    <StyledMain>
      <Container>
        <Switch>
          <Route path="/investments">
            <InvestmentsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </StyledMain>
  );
};

export default Page;
