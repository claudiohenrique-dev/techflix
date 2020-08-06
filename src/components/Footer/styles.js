import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  color: var(--white);
  margin-right: 50px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  text-align: center;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const FooterImg = styled.img`
  height: 32px;
  margin-left: 10px;
  margin-right: 10px;
  width: 32px;
`;
