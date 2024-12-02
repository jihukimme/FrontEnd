import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Router from '../routes/Router';
import * as styled from './Layout.style';

export default function Layout() {
  return (
    <div>
      <styled.LayoutWrapper>
        <Header />
        <styled.ContentWrapper>
          <Router />
        </styled.ContentWrapper>
        <Footer />
      </styled.LayoutWrapper>
    </div>
  );
}
