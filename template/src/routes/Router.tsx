import { Navigate, Route, Routes } from 'react-router-dom';
import Page1 from '../pages/page1/Page1';
import Page2 from '../pages/page2/Page2';
import Page3 from '../pages/page3/Page3';
import Page4 from '../pages/page4/Page4';
import Page5 from '../pages/page5/Page5';

export default function Router() {
  return (
    <Routes>
      {/* 진입 지점 */}
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />

      {/* default 경로 설정 */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
