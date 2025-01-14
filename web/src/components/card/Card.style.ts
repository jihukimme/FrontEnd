import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  padding: 16px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }

  .sub-title {
    margin: 8px 0 4px;
    font-size: 0.9rem;
    color: #555;
  }

  .description {
    margin: 0;
    font-size: 0.85rem;
    color: #777;
    line-height: 1.4;
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

export const Footer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eaeaea;
  background-color: #f9f9f9;

  a {
    font-size: 0.9rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
