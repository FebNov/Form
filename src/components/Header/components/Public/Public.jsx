import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import FormModal from './components/FormModal';
import ToggleContent from '../../../ToggleContent';

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Logo = styled.span`
  color: #008fb4;
`;

const Public = () => (
  <Layout>
    <NavigationLink.Naked href="https://www.lendi.com.au/">
      <Logo>Lendi Team</Logo>
    </NavigationLink.Naked>
    <Divider />
    <ToggleContent
      toggle={(toggler) => (
        <NavigationButton.Button
          variant="primary"
          href="/"
          onClick={toggler}
        >
          Propose a Idea
        </NavigationButton.Button>
      )}
      content={(toggler) => (
        <FormModal onClose={toggler} />
      )}
    />
    <NavigationLink.Text indictable href="/">
      NavigationLink A
    </NavigationLink.Text>
    <NavigationLink.Text indictable href="/">
      NavigationLink B
    </NavigationLink.Text>
  </Layout>
);

export default Public;
