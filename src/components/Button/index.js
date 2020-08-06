import styled from 'styled-components';

const Button = styled.button`
  background: var(--black);
  border-radius: 5px;
  border: 1px solid var(--white);
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity 0.3s;
  
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    background: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;
    text-align: center;
  }
`;
export default Button;
