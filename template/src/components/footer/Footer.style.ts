import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: #fff;
  padding: 40px 20px;
  text-align: left;
  bottom: 0;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: 20px;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #ff9f1c;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const FooterLink = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9f1c;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff9f1c;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  font-size: 0.8rem;
  color: #ccc;
`;
