import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const VanillaStyle = styled.div`
    img {
        width: 0;
    
    }
@media screen and (max-width: 1005px) {
    img {
        width: 100%;
    
    }
}
`;

export default function VanillaLogo() {
  return (
    <VanillaStyle>
      <img src={db.bg} alt="logo Vanilla" />
    </VanillaStyle>
  );
}
