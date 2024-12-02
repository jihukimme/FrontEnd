import React from 'react';
import {
  FooterBottom,
  FooterContainer,
  FooterLink,
  FooterSection,
  FooterSocials,
  FooterWrapper,
} from './Footer.style';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <h4>회사명</h4>
          <p>회사 설명을 여기에 입력합니다. "우리는 고객에게 최고의 서비스를 제공합니다."</p>
        </FooterSection>
        <FooterSection>
          <h4>서비스</h4>
          <ul>
            <li>
              <FooterLink to="/services/web-design">웹 디자인</FooterLink>
            </li>
            <li>
              <FooterLink to="/services/seo">SEO</FooterLink>
            </li>
            <li>
              <FooterLink to="/services/marketing">마케팅</FooterLink>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>지원</h4>
          <ul>
            <li>
              <FooterLink to="/support/faq">FAQ</FooterLink>
            </li>
            <li>
              <FooterLink to="/support/contact">문의하기</FooterLink>
            </li>
            <li>
              <FooterLink to="/support/help">도움말</FooterLink>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>팔로우하기</h4>
          <FooterSocials>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </FooterSocials>
        </FooterSection>
      </FooterContainer>
      <FooterBottom>© 2024 회사명. All rights reserved.</FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
