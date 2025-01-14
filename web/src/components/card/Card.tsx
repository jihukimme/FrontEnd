import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './Card.style';

type CardType = {
  title: string; // 카드의 제목
  sub_title: string; // 부제목(주소나 간단한 설명)
  description: string; // 상세 설명
  image?: string; // 이미지 URL
  link?: string; // 클릭 시 이동할 링크
  onClick?: () => void; // 추가 동작
};

export default function Card({ title, sub_title, description, image, link, onClick }: CardType) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false); // 하트 버튼 상태

  const handleCardClick = () => {
    if (onClick) {
      onClick(); // 추가 동작 수행
    }
    if (link) {
      navigate(link); // 링크로 이동
    }
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev); // 좋아요 상태 토글
  };

  return (
    <styled.CardWrapper onClick={handleCardClick}>
      <styled.ImageWrapper>
        <img src={image} alt={title} />
      </styled.ImageWrapper>
      <styled.ContentWrapper>
        <h3>{title}</h3>
        <p className="sub-title">{sub_title || '정보 없음'}</p>
        <p className="description">{description || '정보 없음'}</p>
      </styled.ContentWrapper>
      <styled.LikeButton
        onClick={(e) => {
          e.stopPropagation(); // 카드 클릭 이벤트와 분리
          toggleLike();
        }}
      >
        {isLiked ? '💖' : '🤍'}
      </styled.LikeButton>
      {link && (
        <styled.Footer>
          <a href={link} target="_blank" rel="noopener noreferrer">
            더 보기
          </a>
        </styled.Footer>
      )}
    </styled.CardWrapper>
  );
}
