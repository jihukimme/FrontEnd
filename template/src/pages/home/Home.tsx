import Button, { ButtonType } from '../../components/button/Button';
import * as styled from './Home.style';

export default function Home() {
  type ButtonProps = {
    text: string;
    type: ButtonType;
    link?: string; // 링크 이동을 위한 속성 (선택적)
    onClick?: () => void; // 버튼 클릭 시 실행할 동작 (선택적)
  };

  // 버튼 속성
  const buttonProps: ButtonProps = {
    text: 'Game Start',
    type: 'start',
    onClick: () => {},
  };

  return (
    <styled.HomeWrapper>
      <h1>Home</h1>
      <Button {...buttonProps} />
    </styled.HomeWrapper>
  );
}
